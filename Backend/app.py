import json

from flask import Flask, render_template, jsonify
from flask import Flask, redirect, url_for, render_template, request, session
import mysql.connector as mysql
import jwt
from datetime import date, timedelta

td = date.today()

db = mysql.connect(host="localhost", user="root", passwd="bsy@1971", database="railway")
iterator = db.cursor()

app = Flask(__name__)
app.permanent_session_lifetime = timedelta(days=1)
app.secret_key = "railway"
app.config['SECRET_KEY'] = "abcd1234"


@app.route('/station')
def hello_world():  # put application's code here
    s = f"select * from station"
    iterator.execute(s)
    stations = iterator.fetchall()
    print(stations)
    return jsonify(stations)

@app.route('/stname', methods = ['POST'])
def stname():
    stid = request.json['stid']
    s = f"select TrainName from Train where TrainID = '" + stid + "';"
    iterator.execute(s);
    stname = iterator.fetchall()[0][0]
    return jsonify({stname})

@app.route('/fromatob', methods = ['POST'])
def fromatob():
    # print("gg")
    print(request.json)
    pickup = request.json['pickup']
    print(pickup)
    destination = request.json['destination']
    date = request.json['date']
    print("rece")
    print(pickup + " " + destination + " " + date)
    s = f"select TrainID, TrainName from Train where TrainID = ( select distinct TrainID from Route where (startStation = '"+pickup+"' or endStation = '"+destination+"') and DateOfDeparture = '"+date+"' group by startStation, endStation);"
    iterator.execute(s)

    trains = iterator.fetchall()
    print(trains)
    return jsonify(trains)


@app.route('/booked')
def booked():
    username = request.json['username']
    query = f"select Book.PassengerName, Ticket.TicketID, Ticket.TicketStatus FROM Book INNER JOIN Ticket ON Book.TicketID = Ticket.TicketID where Ticket.TicketID in 	(select TicketID from Buy where UserName = '"+username+"');"
    iterator.execute(query)
    trains = iterator.fetchall()
    print(trains)
    return jsonify(trains)


@app.route('/signup',  methods = ['POST'])
def signup():
    username = request.json['user']
    password = request.json['Pass']
    firstname = request.json['fname']
    middlename = request.json['mname']
    lastname = request.json['lname']
    DOB = request.json['date']
    addline = request.json['address']
    city = request.json['city']
    state = request.json['state']
    pincode = request.json['pin']
    sex = request.json['gender']
    lang = request.json['lang']
    nationality = request.json['nationality']
    phone = request.json['phno']
    print(DOB.split("-")[2])
    age = 2022 - int(DOB.split("-")[0]);

    query = f"INSERT INTO User (UserName,pass, age,firstname,middlename,lastname,DOB,AddressLine,city,State,Pincode,Sex,PrefferedLanguage,Nationality,PhoneNumber) VALUES ('{username}','{password}',{age},'{firstname}','{middlename}','{lastname}','{DOB}','{addline}','{city}','{state}','{pincode}','{sex}','{lang}','{nationality}','{phone}');"
    iterator.execute(query)
    print(iterator.fetchall())
    db.commit()

    print(query)

    print("signup done , data sent")
    return jsonify("signup done , data sent")



@app.route('/login', methods = ['POST'])
def login():
    print("gg")
    username = request.json['uName']
    password = request.json['pass']
    print(username + " " + password)
    query = f"select pass from User where (select count(UserName) from User where UserName = '" + username + "') = 1 and UserName = '" + username + "';"
    iterator.execute(query)

    pwd = iterator.fetchall()
    print(pwd[0][0] == password)
    if len(pwd[0]) == 0:
        return jsonify({'error':'no such user exist'})
    if pwd[0][0] == password:
        print("ggwp")
        token = jwt.encode({
            'user': username
        }, app.config['SECRET_KEY'], algorithm="HS256")
        print("es")
        return jsonify({'token': token})
        # , 'user':username})
    else:
        return jsonify({'error': 'incorrect username or password'})

@app.route('/adminLogin', methods = ['POST'])
def adminLogin():
    print("g")
    empid = request.json['empId']
    accesscode = request.json['passcode']
    query = f"select accessCode from Administrator where (select count(EmpId) from Administrator where EmpId = '" + empid + "') = 1 and Empid = '" + empid + "';"
    iterator.execute(query)
    print(accesscode + " " + empid)
    code = iterator.fetchall();
    print(code)
    if accesscode == code[0][0]:
        print(1)
        return jsonify({'token':empid})
    else:
        return jsonify({'error':'wrong credentials'})


@app.route('/showpassengers')
def showpassengers():
    trainno = request.json['trainno']
    query = f"Select PassengerName, PassengerAge, PassengerSex, ClassCode from Book Where Book.TrainID = "+trainno+";"
    iterator.execute(query)
    passengers = iterator.fetchall()
    return jsonify(passengers)


@app.route('/allclasses')
def retClasses():
    query = f"select ClassCode from Class"
    iterator.execute(query)
    return jsonify(iterator.fetchall())



@app.route('/alltrains')
def retTrains():
    query = f"select TrainID from Train"
    iterator.execute(query)
    return jsonify(iterator.fetchall())


@app.route('/addtrain')
def addtrain():
    trainid = request.json('trainid')
    trainname = request.json('trainname')
    query = f"INSERT INTO Train VALUES("+trainid+", '"+trainname+"');"
    iterator.execute(query)

    classtype = request.json('class')
    noofseats = request.json('seats')

    query = f"INSERT INTO Train_class VALUES("+trainid+",'"+trainname+"','"+classtype+"',"+noofseats+");"
    iterator.execute(query)
    db.commit()

@app.route('/addroute', methods = ['POST'])
def addroute():
    print(request.json)
    trainid = request.json['trainId']
    stations = request.json['trainRoute']
    seatsleft = request.json['seats']
    classcode = request.json['classCode']
    departuretime = 10
    dateofdeparture = request.json['dateOfdeparture']
    fare = 1000
    temp = stations.split(" ")
    tempclass=classcode.split(" ")
    tempseats = seatsleft.split(" ")
    print(temp)
    print(tempclass)
    print(tempseats)
    for i in range(0,len(temp)-1):
        departuretime += 2
        for j in range(0,len(tempclass)):
                query = f"INSERT INTO Route VALUES({trainid},'{temp[i]}','{temp[i+1]}',{tempseats[j]},'{tempclass[j]}',\"10:{str(departuretime)}:00\", \"10:{str(int(departuretime)+1)}:00\", '{dateofdeparture}', 1000);"
                print(query)
                iterator.execute(query)
                db.commit()
    return

@app.route('/addclass')
def addclass():
    classtype = request.json('class')
    query = f"INSERT INTO Class VALUES('"+classtype+"');"
    iterator.execute(query)
    db.commit()



@app.route('/addadmin')
def addadmin():
    firstname = request.json('firstname')
    middlename = request.json('middlename')
    lastname = request.json('lastname')
    accesscode = request.json('accesscode')
    empID = request.json('empID')
    query = f"INSERT INTO Administrator VALUES({empID},'{firstname}','{middlename}','{lastname}','{accesscode}');"
    iterator.execute(query)
    db.commit()

@app.route('/rank', methods = ['POST'])
def rank():
    print("arsh")
    date = request.json['date']
    print(date)
    query = f"select distinct TrainID, startStation, endStation, DepartureTime, ArrivalTime, dense_rank() over (order by DepartureTime asc) as chronologicalDeparture from Route where DateOfDeparture = '"+date+"';"
    iterator.execute(query)
    trainList = iterator.fetchall();
    print(trainList)
    return json.dumps(trainList, indent=4, sort_keys=True, default=str)
    # return jsonify({trainList})

# @app.route('/cancel')
# def cancel():
#
#
#
#
# @app.route('/book')
# def book():



if __name__ == '__main__':
    app.run()
















