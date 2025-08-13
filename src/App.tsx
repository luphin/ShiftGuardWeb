import React from "react";
import { useNavigate } from "react-router-dom";
import './App.css'

export default function App() {
	const navigate = useNavigate();

	const handleLogin = () => {
		//  validar usuario / password
		navigate("/dashboard");
	};

	return (
		<div className="h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded shadow-md w-80">
				<h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
				<input
					type="text"
					placeholder="Usuario"
					className="w-full mb-4 px-3 py-2 border rounded"
				/>
				<input
					type="password"
					placeholder="Contraseña"
					className="w-full mb-6 px-3 py-2 border rounded"
				/>
				<button
					onClick={handleLogin}
					className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
				>
					Login
				</button>
			</div>
		</div>
	);
}

