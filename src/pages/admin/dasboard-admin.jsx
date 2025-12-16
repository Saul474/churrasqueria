import React, { useState } from 'react';
import './dasboard.css';
import AdminUsers from './admin-users.jsx';
import AdminMenus from './admin-menus.jsx';
import AdminSales from './admin-sales.jsx';

export default function DashboardAdmin() {
	const [tab, setTab] = useState('usuarios');

	return (
		<div className="dashboard-container">
			<h1>Dashboard Admin</h1>
			<p>Bienvenido, eres administrador. Aquí van las herramientas de administración.</p>

			<nav className="dashboard-nav">
				<button onClick={()=>setTab('usuarios')} className="tab-button">Usuarios</button>
				<button onClick={()=>setTab('menus')} className="tab-button">Menús</button>
				<button onClick={()=>setTab('ventas')} className="tab-button">Ventas</button>
			</nav>

			<section className="dashboard-content">
				{tab === 'usuarios' && <AdminUsers />}
				{tab === 'menus' && <AdminMenus />}
				{tab === 'ventas' && <AdminSales />}
			</section>
		</div>
	);
}

