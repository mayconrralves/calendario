const weekDays = ["Domingo", "Segunda","Terça","Quarta","Quinta","Sexta","Sábado"]
const month = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho", "Agosto","Setembro", "Outubro","Novembro", "Dezembro"]

function addNameMonth(nameMonth){
	let textNode = document.createTextNode(nameMonth);
	document.getElementById("month-title").appendChild(textNode);

}

function addYearNode(year){
	let textNode = document.createTextNode(year);
	document.getElementById("year-title").appendChild(textNode);
}
function createNode(word,classNames){
	let node = document.createElement("div");
		let textNode = document.createTextNode(word);
		let classes = document.createAttribute("class");
		classes.value =classNames;

		node.setAttributeNode(classes);
		node.appendChild(textNode);

		document.getElementById('table-week').appendChild(node);
}
function addNodeDay(quantidadeDias, pos, classNames){
	
	/*Se não for um mês válido, não controi a tabela*/
	if(quantidadeDias < 28 || quantidadeDias > 31){
		createNode("Erro",classNames);
		return;
	}
	/*Se a posição escolhida for inválida,  mão constrói a tabela*/
	if(pos < 1 || pos > 7){
		createNode("Erro",classNames);
		return;
	}
	pos = pos-1;
	let lenTable = 35;
	for(let i=1;i<=pos;i++){
		createNode(" ", classNames);
	}
	if(pos > 4 && quantidadeDias !=28){
		lenTable = 42;
	}
	for(let i=1;i<=quantidadeDias;i++){
		/*Se o resto for 1, é domingo*/
		if((pos+i)%7==1){
			createNode(i, classNames+ " domingo-day"); 
		}
		else {
			createNode(i, classNames);
		}
	}
	for(let i=1;i<=(lenTable-(quantidadeDias+pos));i++){
		createNode(" ",classNames);
	}
	
}

function addNodeWeekDay(weekDays, classNames){
	weekDays.forEach((element)=>{
		createNode(element,classNames);
	});
}
addYearNode(2018);
addNameMonth("Agosto");
addNodeWeekDay(weekDays, "cols7 row-week");
addNodeDay(31,4, "cols7");