<template>
  <nav>
    <RouterLink class="navLink" to="/">COMANDAS</RouterLink>
    <RouterLink class="navLink" to="produtos">PRODUTOS</RouterLink>
    <RouterLink class="navLink" to="historico">HISTORICO</RouterLink>
    <RouterLink class="navLink" to="config">CONFIGURAÇÕES</RouterLink>
  </nav>
</template>

<style scoped>
nav {
	background-color: #303030;
	overflow: hidden;
	padding: 3px 5px 0px 5px;
	user-select: none;
}

.navLink {
  text-decoration: none;
	float: left;
	color: #747474;
	text-align: center;
	padding: 4px 16px;
	font-size: 16px;
	transition: 0.3s;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	margin-left: 5px;
}


.navLink:hover {

	background: #454545;
	cursor: pointer;

}

nav .router-link-exact-active {

	background-color: #202020;
	color: #fff;
	cursor: default;

}
</style>