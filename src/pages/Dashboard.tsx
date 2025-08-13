import React from "react";

export default function Dashboard() {
	return (
		<div className="h-screen flex flex-col">
			{/* Header */}
			<header className="bg-blue-500 text-white p-4">
				<h1 className="text-xl font-bold">Dashboard</h1>
			</header>

			{/* Panel central */}
			<main className="flex-1 bg-gray-100 p-8 flex items-center justify-center">
				<div className="bg-white p-6 rounded shadow w-full max-w-2xl text-center">
					<h2 className="text-2xl font-semibold mb-4">Bienvenido al Dashboard</h2>
					<p>Este sera el panel central :)</p>
				</div>
			</main>
		</div>
	);
}
