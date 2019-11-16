window.onload = function() {

var div_header = create('div');
	div_header.className = 'header1';
	document.body.appendChild(div_header);

var content_width = create('div');
	content_width.className = 'content-width';
	div_header.appendChild(content_width);

var container = create('div');
container.className = 'container';
	content_width.appendChild(container);

var row1 = create('div');
row1.className = 'row';
container.appendChild(row1);

var col_md_9 = create('div');
col_md_9.className = 'col-md-9';
row1.appendChild(col_md_9);

var ul1 = create('ul');
ul1.className = 'nav';
col_md_9.appendChild(ul1);

var li1 = create('li');
	li1.className = 'nav-item';
	li1.innerHTML="Search";
	ul1.appendChild(li1);

	var li2 = create('li');
	li2.className = 'nav-item';
	li2.innerHTML="My movies";
	ul1.appendChild(li2);

	var col_md_3 = create('div');
	col_md_3.className = 'col-md-3';
	row1.appendChild(col_md_3);

	var ul2 = create('ul');
	ul2.className = 'nav';
	col_md_3.appendChild(ul2);
	
	var li3 = create('li');
		li3.className = 'nav-item';
		li3.innerHTML="John Doe";
		ul2.appendChild(li3);





		var content_width_1 = create('div');
		content_width_1.className = 'content-width';
		document.body.appendChild(content_width_1);

		var container2 = create('div');
		container2.className = 'container';
			content_width_1.appendChild(container2);

		var row2 = create('div');
		row2.className = 'row';
		container2.appendChild(row2);

		var col_md_8 = create('div');
		col_md_8.className = 'col-md-8';
		row2.appendChild(col_md_8);

		var col_md_4 = create('div');
		col_md_4.className = 'col-md-4';
		row2.appendChild(col_md_4);



		var row3 = create('div');
		row3.className = 'row';
		container2.appendChild(row3);

		var col_md_8 = create('div');
		col_md_8.className = 'col-md-8';
		row3.appendChild(col_md_8);

		var col_md_4 = create('div');
		col_md_4.className = 'col-md-4';
		row3.appendChild(col_md_4);



		var s = create('section');
		container2.appendChild(s);
		s.className = 'container';
		var s_form1 = create('form');
		s.appendChild(s_form1);
		s_form1.name = 'select';
		s_form1.method = 'get';
		var s_div1 = create('div');
		s_form1.appendChild(s_div1);
		s_div1.className = 'selectors';

	var s_select1 = create('select');
	s_div1.appendChild(s_select1);
	s_select1.name = 'Type';
	var s_select1_arr = ['Format','Movie'];
	selectList(s_select1_arr, s_select1);

	var s_select2 = create('select');
	s_div1.appendChild(s_select2);
	s_select2.name = 'genre';
	var s_select2_arr = ['Genre','Action','Adventure','Apocalypse','Comedy','Drama','Thriller'];
	selectList(s_select2_arr, s_select2);

	var s_select3 = create('select');
	s_div1.appendChild(s_select3);
	s_select3.name = 'year';
	var data = new Date();
	var currentYear = data.getFullYear();
	var s_select3_arr = ['Year'];
	for (var i = currentYear; i > 2010; i--) {
		s_select3_arr.push(i);
	}
	selectList(s_select3_arr, s_select3);

	var s_div2 = create('div');
	s_form1.appendChild(s_div2);
	s_div2.className = 'nav';
	var s_input1 = create('input');
	s_div2.appendChild(s_input1);
	var s_input2 = create('input');
	s_div2.appendChild(s_input2);
	s_input2.type = 'submit';
	s_input2.value = 'Найти';
	s_input2.className = 'search_btn';




		var row4 = create('div');
		row4.className = 'row';
		container2.appendChild(row4);

		var tab1e = create('table');
		tab1e.className = 'table';
		row4.appendChild(tab1e);
		createTable(tab1e, colsName, Movies);

			document.body
			.appendChild(create('footer'))
			.appendChild(create('div'))
			.appendChild(create('span'))
			.textContent = 'Сайт разработан Accenture';
}

var colsName = ['','Title','Format','Genre','Year','Rating'];
var Movies = [{
		'':"1",
		Title: "Alien",
		Format: "Movie",
		Genre: "Horror",
		Year: 1979,
		Rating: 8.5
	}];

	function selectList(arrName, selectVar) {
		for (var i = 0; i < arrName.length; i++) {
			var s_option1 = create('option');
			selectVar.appendChild(s_option1).textContent = arrName[i];
			if (arrName[i] == arrName[0]) {
				s_option1.setAttribute('disabled', true);
				s_option1.setAttribute('selected', true);
			}
		}
	}
	
	function create(name) {
		return document.createElement(name);
	}
	
	const createTable = (table, columnNameList, dataList) => {
		let tableRow = create('tr');
		table.appendChild(tableRow);
		columnNameList.forEach(columnName => {
			let tableCell = create('td');
			tableRow.appendChild(tableCell);
			tableCell.textContent = columnName;
		});
		dataList.forEach(row => {
			let tableRow = create('tr');
			table.appendChild(tableRow);
			Object.values(row).forEach(column => {
				let tableCell = create('td');
				tableRow.appendChild(tableCell);
				tableCell.textContent = column;
			});
		});
	};