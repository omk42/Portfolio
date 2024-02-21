


Vue.component ('custom-menu', {
	template: `
		<nav class="navbar navbar-light libre-baskerville-regular">
			<a class="mr-auto" data-toggle="dropdown" href="#"><span class="navbar-toggler-icon "></span> </a>
			
			<ul id="RegLinks" class="dropdown-menu">
				<li v-if= "pageId != 'Index'" id="'linkIndex" class="ml-auto"> <a class="nav-item nav-link" onClick="gotoPage('Index')" href='#'> Home </a>  </li>
				<li v-else> <a class="nav-item nav-link"  > Home </a>   </li>

				<li v-if= "pageId != 'About' "id="linkAbout" class="ml-auto"> <a class="nav-item nav-link" onclick="gotoPage('About')" href='#'> About </a>  </li>
				<li v-else id="linkAbout"> <a class="nav-item nav-link" > About </a>  </li>

				<li v-if= "pageId != 'Content'" id="linkPag2" class="ml-auto"> <a class="nav-item nav-link" onclick="gotoPage('Content')" href='#'> Content </a>  </li>
				<li v-else id="linkPag2"> <a class="nav-item nav-link" > Content </a>  </li>
			</ul>
		</nav>	
	`,
	props: [ 'pageId']
}) ;


Vue.component ('custom-navbar', {
	template: `
			<div class="col-2 libre-baskerville-regular">
				<div class="hide-sm" style="padding-top:20px">
					<div v-if= "pageId != 'Index'" id="'linkIndex" class="ml-auto"> <a class="nav-item nav-link" onClick="gotoPage('Index')" href='#'> Home </a>  </div>
					<div v-else class="ml-auto"> <a class="nav-item nav-link"  > Home </a>   </div>

					<div v-if= "pageId != 'About' "id="linkAbout" class="ml-auto"> <a class="nav-item nav-link" onclick="gotoPage('About')" href='#'> About </a>  </div>
					<div v-else id="linkAbout" class="ml-auto"> <a class="nav-item nav-link" > About </a>  </div>

					<div v-if= "pageId != 'Content'" id="linkPag2" class="ml-auto"> <a class="nav-item nav-link" onclick="gotoPage('Content')" href='#'> Content </a>  </div>
					<div v-else id="linkPag2" class="ml-auto"> <a class="nav-item nav-link" > Content </a>  </div>
				</div>
			</div>
	`,
	props: [ 'pageId']
}) ;


function gotoPage(pageName) {
	//alert("loading " + pageName) ;
	document.location.href = pageName + ".html" ;
}

function getPageContent (pageId) {
	return SiteContent[pageId] ;
}