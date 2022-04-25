import React, { Suspense, useRef } from "react";
import "../../styles.css";
import Navbar from "../Navbar";
import Booking from "./Booking";
// import { Canvas } from "react-three-fiber";
// import { useGLTF } from "@react-three/drei";
// import Train from "../other/train";

const Home = () => {
    return (
        <>
            <Navbar />
            <Booking />
        </>
    );
};

// function Train({ ...props }) {
//     const group = useRef();
//     const { nodes, materials } = useGLTF("trainf.glb");
//     return (
//         <group ref={group} {...props} dispose={null}>
//             <group rotation={[-Math.PI / 2, 0, 0]}>
//                 <group rotation={[Math.PI / 2, 0, 0]}>
//                     <group position={[0, 1.59, 0]}>
//                         <mesh
//                             geometry={nodes.Object_4.geometry}
//                             material={materials.Roof_Black}
//                         />
//                     </group>
//                     <group position={[0, 1.59, 0]}>
//                         <mesh
//                             geometry={nodes.Object_6.geometry}
//                             material={materials.Roof_Black}
//                         />
//                         <mesh
//                             geometry={nodes.Object_7.geometry}
//                             material={materials["Body.001"]}
//                         />
//                         <mesh
//                             geometry={nodes.Object_8.geometry}
//                             material={materials.Red_Sign}
//                         />
//                     </group>
//                     <group position={[0, 1.59, 0]}>
//                         <mesh
//                             geometry={nodes.Object_10.geometry}
//                             material={materials.White}
//                         />
//                     </group>
//                     <group position={[0, 1.52, 0.1]}>
//                         <mesh
//                             geometry={nodes.Object_12.geometry}
//                             material={materials.Button_Silver}
//                         />
//                     </group>
//                     <group position={[0, 1.59, 0.05]}>
//                         <mesh
//                             geometry={nodes.Object_14.geometry}
//                             material={materials.Button_Silver}
//                         />
//                     </group>
//                     <group position={[0, 1.59, 0]}>
//                         <mesh
//                             geometry={nodes.Object_16.geometry}
//                             material={materials.Roof_Black}
//                         />
//                     </group>
//                     <group position={[0, 2, 10.09]} scale={[1, 1.13, 1]}>
//                         <mesh
//                             geometry={nodes.Object_18.geometry}
//                             material={materials.Roof_Black}
//                         />
//                     </group>
//                     <group position={[0, 1.59, 0]}>
//                         <mesh
//                             geometry={nodes.Object_20.geometry}
//                             material={materials.Roof_Black}
//                         />
//                     </group>
//                     <group position={[0, 1.59, 0.13]}>
//                         <mesh
//                             geometry={nodes.Object_22.geometry}
//                             material={materials.Roof_Black}
//                         />
//                     </group>
//                     <group position={[0.01, 2.65, -7.46]}>
//                         <mesh
//                             geometry={nodes.Object_24.geometry}
//                             material={materials.Roof_Black}
//                         />
//                         <mesh
//                             geometry={nodes.Object_25.geometry}
//                             material={materials.Yellow}
//                         />
//                         <mesh
//                             geometry={nodes.Object_26.geometry}
//                             material={materials.Black_Plastic}
//                         />
//                     </group>
//                     <group position={[0, 1.59, -0.01]}>
//                         <mesh
//                             geometry={nodes.Object_28.geometry}
//                             material={materials.Black_Plastic}
//                         />
//                     </group>
//                     <group position={[0, 1.61, 0]}>
//                         <mesh
//                             geometry={nodes.Object_30.geometry}
//                             material={materials.Shock_Signs}
//                         />
//                     </group>
//                     <group position={[0, 1.59, 0.14]}>
//                         <mesh
//                             geometry={nodes.Object_32.geometry}
//                             material={materials.Shock_Signs}
//                         />
//                     </group>
//                     <group position={[0.06, 1.61, 0]}>
//                         <mesh
//                             geometry={nodes.Object_34.geometry}
//                             material={materials.Shock_Signs}
//                         />
//                     </group>
//                     <group position={[0, 1.59, 0]}>
//                         <mesh
//                             geometry={nodes.Object_36.geometry}
//                             material={materials.Shock_Signs}
//                         />
//                     </group>
//                     <group position={[0, 1.59, 0]}>
//                         <mesh
//                             geometry={nodes.Object_38.geometry}
//                             material={materials.Shock_Signs}
//                         />
//                     </group>
//                     <group position={[0, 1.59, 0]}>
//                         <mesh
//                             geometry={nodes.Object_40.geometry}
//                             material={materials.Shock_Signs}
//                         />
//                     </group>
//                     <group position={[0, 1.54, 0]} scale={[1.01, 1.01, 0.95]}>
//                         <mesh
//                             geometry={nodes.Object_42.geometry}
//                             material={materials.Black_Plastic}
//                         />
//                         <mesh
//                             geometry={nodes.Object_43.geometry}
//                             material={materials["Glass.001"]}
//                         />
//                     </group>
//                     <group position={[0, 1.59, 0]}>
//                         <mesh
//                             geometry={nodes.Object_45.geometry}
//                             material={materials.Roof_Black}
//                         />
//                         <mesh
//                             geometry={nodes.Object_46.geometry}
//                             material={materials.Silver_Gold}
//                         />
//                     </group>
//                     <group position={[0, 2.5, -5.36]}>
//                         <mesh
//                             geometry={nodes.Object_48.geometry}
//                             material={materials.Black_Plastic}
//                         />
//                         <mesh
//                             geometry={nodes.Object_49.geometry}
//                             material={materials["Body.001"]}
//                         />
//                         <mesh
//                             geometry={nodes.Object_50.geometry}
//                             material={materials.Glass}
//                         />
//                         <mesh
//                             geometry={nodes.Object_51.geometry}
//                             material={materials.Orange}
//                         />
//                     </group>
//                     <group
//                         position={[0, 2.21, -5.37]}
//                         scale={[1.31, 0.77, 0.77]}
//                     >
//                         <mesh
//                             geometry={nodes.Object_53.geometry}
//                             material={materials.White}
//                         />
//                     </group>
//                     <group
//                         position={[0, 2.21, -5.37]}
//                         scale={[1.31, 0.77, 0.77]}
//                     >
//                         <mesh
//                             geometry={nodes.Object_55.geometry}
//                             material={materials.White}
//                         />
//                     </group>
//                     <group position={[0, 1.59, 0]}>
//                         <mesh
//                             geometry={nodes.Object_57.geometry}
//                             material={materials.Button_Silver}
//                         />
//                     </group>
//                     <group
//                         position={[0, 2.73, 9.49]}
//                         rotation={[0.89, 0.44, 0.02]}
//                         scale={[1, 1.67, 1]}
//                     >
//                         <mesh
//                             geometry={nodes.Object_59.geometry}
//                             material={materials.Black_Plastic}
//                         />
//                     </group>
//                     <group position={[0, 1.6, -2.83]} scale={[1, 1, 1.33]}>
//                         <mesh
//                             geometry={nodes.Object_61.geometry}
//                             material={materials.Yellow}
//                         />
//                     </group>
//                     <group
//                         position={[0.14, 2.02, 9.89]}
//                         rotation={[-Math.PI / 2, 0, 0]}
//                         scale={0.82}
//                     >
//                         <mesh
//                             geometry={nodes.Object_63.geometry}
//                             material={materials.Black_Plastic}
//                         />
//                     </group>
//                     <group position={[0, 1.59, 0]}>
//                         <mesh
//                             geometry={nodes.Object_65.geometry}
//                             material={materials["Body.001"]}
//                         />
//                     </group>
//                     <group position={[0, 1.59, -13.23]}>
//                         <mesh
//                             geometry={nodes.Object_67.geometry}
//                             material={materials.Roof_Black}
//                         />
//                     </group>
//                     <group position={[0, 1.52, -3.28]}>
//                         <mesh
//                             geometry={nodes.Object_69.geometry}
//                             material={materials.Button_Silver}
//                         />
//                     </group>
//                     <group position={[0, 1.59, 0]}>
//                         <mesh
//                             geometry={nodes.Object_71.geometry}
//                             material={materials["Body.001"]}
//                         />
//                         <mesh
//                             geometry={nodes.Object_72.geometry}
//                             material={materials.Black_Plastic}
//                         />
//                         <mesh
//                             geometry={nodes.Object_73.geometry}
//                             material={materials.Glass}
//                         />
//                         <mesh
//                             geometry={nodes.Object_74.geometry}
//                             material={materials.Orange}
//                         />
//                     </group>
//                     <group position={[0, 1.67, 0]}>
//                         <mesh
//                             geometry={nodes.Object_76.geometry}
//                             material={materials.Button_Silver}
//                         />
//                     </group>
//                     <mesh
//                         geometry={nodes.Object_78.geometry}
//                         material={materials.Emergency_Red}
//                     />
//                     <mesh
//                         geometry={nodes.Object_79.geometry}
//                         material={materials.Emergency_White}
//                     />
//                     <group position={[0, 1.59, 0.36]}>
//                         <mesh
//                             geometry={nodes.Object_81.geometry}
//                             material={materials["Body.001"]}
//                         />
//                         <mesh
//                             geometry={nodes.Object_82.geometry}
//                             material={materials.Black_Plastic}
//                         />
//                         <mesh
//                             geometry={nodes.Object_83.geometry}
//                             material={materials.Roof_Black}
//                         />
//                         <mesh
//                             geometry={nodes.Object_84.geometry}
//                             material={materials.Glass}
//                         />
//                         <mesh
//                             geometry={nodes.Object_85.geometry}
//                             material={materials.Orange}
//                         />
//                         <mesh
//                             geometry={nodes.Object_86.geometry}
//                             material={materials.Wall}
//                         />
//                         <mesh
//                             geometry={nodes.Object_87.geometry}
//                             material={materials.Yellow}
//                         />
//                         <mesh
//                             geometry={nodes.Object_88.geometry}
//                             material={materials.Red_Glass}
//                         />
//                     </group>
//                     <group position={[0, 1.59, 0]}>
//                         <mesh
//                             geometry={nodes.Object_90.geometry}
//                             material={materials["Body.001"]}
//                         />
//                     </group>
//                     <group position={[0, 4.25, -0.2]}>
//                         <mesh
//                             geometry={nodes.Object_92.geometry}
//                             material={materials.Roof_Black}
//                         />
//                     </group>
//                     <group position={[0, 1.59, 0]}>
//                         <mesh
//                             geometry={nodes.Object_94.geometry}
//                             material={materials["Body.001"]}
//                         />
//                         <mesh
//                             geometry={nodes.Object_95.geometry}
//                             material={materials.Roof_Black}
//                         />
//                     </group>
//                     <group position={[0, 1.59, -9.57]}>
//                         <mesh
//                             geometry={nodes.Object_97.geometry}
//                             material={materials.Roof_Black}
//                         />
//                         <mesh
//                             geometry={nodes.Object_98.geometry}
//                             material={materials["Body.001"]}
//                         />
//                     </group>
//                     <group position={[0.01, 0.85, 6.51]}>
//                         <mesh
//                             geometry={nodes.Object_100.geometry}
//                             material={materials.Wheels}
//                         />
//                         <mesh
//                             geometry={nodes.Object_101.geometry}
//                             material={materials.Wheels}
//                         />
//                         <mesh
//                             geometry={nodes.Object_102.geometry}
//                             material={materials.Roof_Black}
//                         />
//                         <mesh
//                             geometry={nodes.Object_103.geometry}
//                             material={materials.Orange}
//                         />
//                         <mesh
//                             geometry={nodes.Object_104.geometry}
//                             material={materials.Button_Silver}
//                         />
//                     </group>
//                     <group
//                         position={[0.01, 0.91, 4.43]}
//                         scale={[4.22, 1.38, 1.38]}
//                     >
//                         <mesh
//                             geometry={nodes.Object_106.geometry}
//                             material={materials.Roof_Black}
//                         />
//                     </group>
//                     <group position={[0, 1.59, 0]}>
//                         <mesh
//                             geometry={nodes.Object_108.geometry}
//                             material={materials.Wheels}
//                         />
//                     </group>
//                     <group
//                         position={[-0.02, 4.16, -1.19]}
//                         scale={[0.04, 0.17, 0.22]}
//                     >
//                         <mesh
//                             geometry={nodes.Object_110.geometry}
//                             material={materials.Silver_Gold}
//                         />
//                     </group>
//                     <group
//                         position={[-0.02, 4.16, -2.23]}
//                         scale={[0.04, 0.17, 0.22]}
//                     >
//                         <mesh
//                             geometry={nodes.Object_112.geometry}
//                             material={materials.Silver_Gold}
//                         />
//                     </group>
//                     <mesh
//                         geometry={nodes.Object_114.geometry}
//                         material={materials.Roof_Black}
//                     />
//                     <mesh
//                         geometry={nodes.Object_116.geometry}
//                         material={materials.Silver_Gold}
//                     />
//                     <mesh
//                         geometry={nodes.Object_117.geometry}
//                         material={materials.material}
//                     />
//                     <mesh
//                         geometry={nodes.Object_118.geometry}
//                         material={materials.Roof_Black}
//                     />
//                     <mesh
//                         geometry={nodes.Object_119.geometry}
//                         material={materials.Button_Silver}
//                     />
//                     <mesh
//                         geometry={nodes.Object_120.geometry}
//                         material={materials.Black_Plastic}
//                     />
//                     <mesh
//                         geometry={nodes.Object_121.geometry}
//                         material={materials.Glass}
//                     />
//                     <mesh
//                         geometry={nodes.Object_122.geometry}
//                         material={materials["Orange.001"]}
//                     />
//                     <mesh
//                         geometry={nodes.Object_123.geometry}
//                         material={materials.Wheels}
//                     />
//                     <mesh
//                         geometry={nodes.Object_124.geometry}
//                         material={materials.Emergency_White}
//                     />
//                     <group
//                         position={[0, 1.29, -7.11]}
//                         scale={[1.01, 1.27, 1.27]}
//                     >
//                         <mesh
//                             geometry={nodes.Object_126.geometry}
//                             material={materials.Roof_Black}
//                         />
//                     </group>
//                     <group
//                         position={[0.01, 0.85, -3.92]}
//                         rotation={[-Math.PI, 0, -Math.PI]}
//                     >
//                         <mesh
//                             geometry={nodes.Object_128.geometry}
//                             material={materials.Wheels}
//                         />
//                         <mesh
//                             geometry={nodes.Object_129.geometry}
//                             material={materials.Wheels}
//                         />
//                         <mesh
//                             geometry={nodes.Object_130.geometry}
//                             material={materials.Roof_Black}
//                         />
//                         <mesh
//                             geometry={nodes.Object_131.geometry}
//                             material={materials.Orange}
//                         />
//                         <mesh
//                             geometry={nodes.Object_132.geometry}
//                             material={materials.Button_Silver}
//                         />
//                     </group>
//                     <group position={[0, 0.9, -6.51]} scale={[0.82, 0.6, 0.68]}>
//                         <mesh
//                             geometry={nodes.Object_134.geometry}
//                             material={materials.Roof_Black}
//                         />
//                         <mesh
//                             geometry={nodes.Object_135.geometry}
//                             material={materials.Wheels}
//                         />
//                     </group>
//                     <mesh
//                         geometry={nodes.Object_137.geometry}
//                         material={materials.Orange}
//                     />
//                     <mesh
//                         geometry={nodes.Object_138.geometry}
//                         material={materials.Yellow}
//                     />
//                     <mesh
//                         geometry={nodes.Object_139.geometry}
//                         material={materials.material}
//                     />
//                     <mesh
//                         geometry={nodes.Object_141.geometry}
//                         material={materials.Black_Plastic}
//                     />
//                     <group position={[0, 0, -1.23]}>
//                         <mesh
//                             geometry={nodes.Object_143.geometry}
//                             material={materials.Wheels}
//                         />
//                     </group>
//                     <mesh
//                         geometry={nodes.Object_145.geometry}
//                         material={materials.Roof_Black}
//                     />
//                     <mesh
//                         geometry={nodes.Object_146.geometry}
//                         material={materials.Button_Silver}
//                     />
//                     <group
//                         position={[0.5, 0.88, -7.19]}
//                         scale={[0.08, 0.7, 0.02]}
//                     >
//                         <mesh
//                             geometry={nodes.Object_148.geometry}
//                             material={materials.Roof_Black}
//                         />
//                     </group>
//                     <group position={[0, 4.24, -0.96]} scale={[1, 1, 8.41]}>
//                         <mesh
//                             geometry={nodes.Object_150.geometry}
//                             material={materials.Roof_Black}
//                         />
//                     </group>
//                     <group position={[0, 1.58, 0.89]}>
//                         <mesh
//                             geometry={nodes.Object_152.geometry}
//                             material={materials.Roof_Black}
//                         />
//                     </group>
//                     <group position={[0, 1.58, -0.26]}>
//                         <mesh
//                             geometry={nodes.Object_154.geometry}
//                             material={materials.Roof_Black}
//                         />
//                     </group>
//                     <group
//                         position={[-0.01, 4.08, -0.98]}
//                         rotation={[0, -0.7, 0]}
//                         scale={[0.04, 0.17, 0.22]}
//                     >
//                         <mesh
//                             geometry={nodes.Object_156.geometry}
//                             material={materials.Roof_Black}
//                         />
//                     </group>
//                     <group
//                         position={[-0.01, 4.08, -2.14]}
//                         rotation={[0, -0.7, 0]}
//                         scale={[0.04, 0.17, 0.22]}
//                     >
//                         <mesh
//                             geometry={nodes.Object_158.geometry}
//                             material={materials.Roof_Black}
//                         />
//                     </group>
//                     <group position={[0, 0, 0.31]}>
//                         <mesh
//                             geometry={nodes.Object_160.geometry}
//                             material={materials.Seat}
//                         />
//                         <mesh
//                             geometry={nodes.Object_161.geometry}
//                             material={materials.Black_Plastic}
//                         />
//                         <mesh
//                             geometry={nodes.Object_162.geometry}
//                             material={materials.White}
//                         />
//                         <mesh
//                             geometry={nodes.Object_163.geometry}
//                             material={materials.Cabin_Light}
//                         />
//                         <mesh
//                             geometry={nodes.Object_164.geometry}
//                             material={materials.Dash}
//                         />
//                         <mesh
//                             geometry={nodes.Object_165.geometry}
//                             material={materials.Wall}
//                         />
//                     </group>
//                     <group position={[0, 4.99, 0.36]}>
//                         <mesh
//                             geometry={nodes.Object_167.geometry}
//                             material={materials.Wall}
//                         />
//                         <mesh
//                             geometry={nodes.Object_168.geometry}
//                             material={materials.Cabin_Light}
//                         />
//                         <mesh
//                             geometry={nodes.Object_169.geometry}
//                             material={materials.Black_Plastic}
//                         />
//                     </group>
//                     <group
//                         position={[0.01, -0.01, 3.15]}
//                         rotation={[-Math.PI, 0, -Math.PI]}
//                     >
//                         <mesh
//                             geometry={nodes.Object_171.geometry}
//                             material={materials.Roof_Black}
//                         />
//                     </group>
//                     <group position={[0, 1.22, 9.22]} scale={[0.9, 0.65, 0.75]}>
//                         <mesh
//                             geometry={nodes.Object_173.geometry}
//                             material={materials.Wheels}
//                         />
//                     </group>
//                     <group position={[0, 1.36, 9.91]}>
//                         <mesh
//                             geometry={nodes.Object_175.geometry}
//                             material={materials.Roof_Black}
//                         />
//                         <mesh
//                             geometry={nodes.Object_176.geometry}
//                             material={materials.Button_Silver}
//                         />
//                     </group>
//                     <mesh
//                         geometry={nodes.Object_178.geometry}
//                         material={materials.Wheels}
//                     />
//                     <mesh
//                         geometry={nodes.Object_180.geometry}
//                         material={materials.Wheels}
//                     />
//                     <mesh
//                         geometry={nodes.Object_181.geometry}
//                         material={materials.Silver_Gold}
//                     />
//                     <group
//                         position={[0.55, 0.98, 9.43]}
//                         rotation={[-Math.PI / 2, 0, 0]}
//                         scale={[1, 0.21, 1]}
//                     >
//                         <mesh
//                             geometry={nodes.Object_183.geometry}
//                             material={materials.Silver_Gold}
//                         />
//                     </group>
//                     <mesh
//                         geometry={nodes.Object_185.geometry}
//                         material={materials.Wheels}
//                     />
//                     <group
//                         position={[0, 1.3, 10.18]}
//                         rotation={[0, 0, -Math.PI / 2]}
//                         scale={[0.64, 1.48, 0.64]}
//                     >
//                         <mesh
//                             geometry={nodes.Object_187.geometry}
//                             material={materials.Roof_Black}
//                         />
//                     </group>
//                     <group position={[-0.2, -0.27, -1.11]}>
//                         <mesh
//                             geometry={nodes.Object_189.geometry}
//                             material={materials.Roof_Black}
//                         />
//                     </group>
//                     <group
//                         position={[-0.49, 1.08, 9.9]}
//                         rotation={[-Math.PI, 0, -Math.PI]}
//                         scale={[0.08, 0.7, 0.02]}
//                     >
//                         <mesh
//                             geometry={nodes.Object_191.geometry}
//                             material={materials.Roof_Black}
//                         />
//                     </group>
//                     <mesh
//                         geometry={nodes.Object_193.geometry}
//                         material={materials["Yellow.002"]}
//                     />
//                     <mesh
//                         geometry={nodes.Object_194.geometry}
//                         material={materials["Red.002"]}
//                     />
//                     <mesh
//                         geometry={nodes.Object_195.geometry}
//                         material={materials["Roof_Black.001"]}
//                     />
//                     <mesh
//                         geometry={nodes.Object_197.geometry}
//                         material={materials.Reflector}
//                     />
//                     <group
//                         position={[1.47, 2.67, 3.53]}
//                         rotation={[Math.PI / 2, 0, -Math.PI / 2]}
//                         scale={1.18}
//                     >
//                         <mesh
//                             geometry={nodes.Object_199.geometry}
//                             material={materials.Grand_Central_Logo}
//                         />
//                     </group>
//                     <group
//                         position={[-1.48, 2.67, 3.53]}
//                         rotation={[Math.PI / 2, 0, Math.PI / 2]}
//                         scale={1.18}
//                     >
//                         <mesh
//                             geometry={nodes.Object_201.geometry}
//                             material={materials.Grand_Central_Logo}
//                         />
//                     </group>
//                     <group
//                         position={[1.43, 2.29, 9]}
//                         rotation={[Math.PI / 2, 0.07, -Math.PI / 2]}
//                         scale={0.25}
//                     >
//                         <mesh
//                             geometry={nodes.Object_203.geometry}
//                             material={materials.material_0}
//                         />
//                     </group>
//                     <group
//                         position={[-1.43, 2.29, 8.34]}
//                         rotation={[Math.PI / 2, -0.07, Math.PI / 2]}
//                         scale={0.25}
//                     >
//                         <mesh
//                             geometry={nodes.Object_205.geometry}
//                             material={materials.material_0}
//                         />
//                     </group>
//                     <group position={[0.55, 0.93, 9.36]}>
//                         <mesh
//                             geometry={nodes.Object_207.geometry}
//                             material={materials.Silver_Gold}
//                         />
//                     </group>
//                 </group>
//             </group>
//         </group>
//     );
// }

export default Home;
