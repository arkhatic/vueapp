<script setup>
import NavBar from './components/NavBar.vue'

</script>

<template>
 <header>
    <NavBar />

    <router-view></router-view>
</header>
</template>

<style>
* {
	user-select: none;
	margin: 0;
	padding: 0;
	font-family: 'Segoe UI Variable Display', sans-serif;
	transition: all .3s;

}

body {
  margin: 0;
  padding: 0;
  background-color: #202020;
}

::-webkit-scrollbar {
	width: 7px;
}

::-webkit-scrollbar-track {
	background: #595959;
	border-radius: 32px;
	
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: #888;
	border-radius: 32px;
}



body {

	background-color: #202020;
	color: #ffffff;
	font-size: 16px;
	line-height: 1.5;
}

.menu.selected {
	display: flex;
	flex-direction: row;
	background-color: #202020;
}

.menu {
	display: none;
}

.option {
	font-size: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0;
	width: 100px;

	border: 1px solid #606060;
	border-radius: 5px;

	padding: 16px 30px;
	margin-left: 12px;
}

.option:hover {
	background-color: #454545;
	cursor: pointer;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

/* .menuopt {
		width: 90vw;
} */

form#formTab {
	margin-left: 12px;
	margin-top: 12px;
	color: #555;
	display: flex;
	padding: 2px;
	border: 1px solid #606060;
	border-radius: 5px;
	width: 400px;
}

#subcfg {
	margin-left: 12px;
	margin-top: 12px;
	display: flex;
	padding: 2px;
	background-color: #303030;
	border: none;
	width: 60px;
	height: 30px;
	align-items: center;
	justify-content: center;
	font-size: 13px;
	color: #fff;

}

form#formCfg {
	margin-left: 12px;
	margin-top: 12px;
	display: flex;
	padding: 2px;
	width: 400px;
}

input#srcmd{
	margin-left: 12px;
	border-radius: 5px;
	background: #454545;
	border: none;
	padding-left: 5px;
	color: #ffffff;
}
input#srcmd2{
	margin-left: 12px;
	border-radius: 5px;
	background: #454545;
	border: none;
	padding-left: 5px;
	color: #ffffff;
	width: 100px;
}
input[type="number"]#searchbar {
	width: 400px;
	border: none;
	background: transparent;
	margin: 0;
	padding: 7px 8px;
	font-size: 14px;
	color: inherit;
	border: 1px solid transparent;
	border-radius: inherit;
}

input[type="number"]::placeholder {
	color: #bbb;
}

button[type="submit"]#srch {
	text-indent: -999px;
	overflow: hidden;
	width: 40px;
	padding: 0;
	margin: 0;
	border: 1px solid transparent;
	border-radius: inherit;
	background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat center;
	filter: invert(1);
	opacity: 0.7;
	pointer-events: none;
}

button[type="submit"]:focus,
input:focus {
	box-shadow: none;
	border-color: none;
	outline: none;
}


/* Menu principal Css */

.unselectable {
	-moz-user-select: -moz-none;
	-khtml-user-select: none;
	-webkit-user-select: none;
	-o-user-select: none;
	user-select: none;
}

.pedido:hover {
	background-color: #74ccff;
}

.opentext {
	position: absolute;
	font-size: small;
	margin-top: -80px;
}

.title {
	font-size: medium;
	font-weight: 400;
}

.submenu {
	margin-left: 20px;
	margin-bottom: 10px;
}

.info {
	margin-top: 20px;
}

.hidden {
	display: none;
}

.mainPage {
	display: flex;
}

.ongoing {
	display: flex;
	flex-wrap: wrap;
	padding-top: 10px;

}

.pedido {
	display: flex;
	height: 100px;
	width: 100px;
	justify-content: center;
	align-items: center;
	background-color: #3671e0;
	position:relative;
	margin-right: 20px;

	margin-bottom: 20px;
}

.fechado {
	display: flex;
	height: 100px;
	width: 100px;
	justify-content: center;
	align-items: center;
	background-color: #454545;
	margin-right: 20px;

	margin-bottom: 20px;
}

.fechado:hover {
	background-color: #757575;
}

.available {
	display: flex;
	flex-wrap: wrap;
	padding-top: 10px;
}

.cselect {
	background-color: #3FB360;
}

tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}
table tr {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
}
table {
	color: #000000;
    border-spacing: 0;
    border-collapse: collapse;
}

#comandasub {
	font-size: 12px;
	position: absolute;
	bottom: 0;
}

.container {
	border: 1px solid #101010;
	margin-top: 10px;
	max-width: 1000px;
	margin-right:20px;
	display:flex;
	justify-content:center;
	align-items:center;
	margin-left: auto;
	margin-right: auto;
}

.table {
	width:100%;
}

.table-header {
	display:flex;
	width:100%;
	background:#303030;
	padding:(12px * 1.5) 0;
}

.table-row {
	display:flex;
	width:100%;
	padding:(12px * 1.5) 0;
	
	&:nth-of-type(odd) {
		background:#404040;
	}
}

.table-data, .header__item {
	flex: 1 1 20%;
	text-align:center;
}

.header__item {
	text-transform:uppercase;
}

.filter__link {
	color:white;
	text-decoration: none;
	position:relative;
	display:inline-block;
	padding-left:24px;
	padding-right:24px;
	
	&::after {
		content:'';
		position:absolute;
		right:-(12px * 1.5);
		color:white;
		font-size:12px;
		top: 50%;
		transform: translateY(-50%);
	}
	
	&.desc::after {
		content: '(desc)';
	}

	&.asc::after {
		content: '(asc)';
	}
	

}
</style>
