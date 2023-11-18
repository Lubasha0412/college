let $header = document.createElement('h1');
let $pr = document.createTextNode('Практика 9');        
$header.append($pr);
$header.className = 'header';
document.body.append($header);

let $h2 = document.createElement('h2');
let $text = document.createTextNode('Lorem ipsum');  
$h2.append($text);
$h2.className = 'h2';
document.body.append($h2);

let templ = document.getElementById('temp');
let block = document.querySelector('body');

let txt = document.importNode(templ.content, true);
txt.querySelector('h3').textContent = 'Dolor sit amet';
txt.querySelector('p').textContent = 'Aliquam eleifend consequat purus, a tincidunt odio vehicula eget. Sed sollicitudin, urna vitae elementum iaculis, leo tellus tristique tortor, quis condimentum justo sem sit amet sem. Fusce mattis metus metus, sed egestas tellus faucibus quis.';
block.appendChild(txt);

let txt1 = document.importNode(templ.content, true);
txt1.querySelector('h3').textContent = 'Nunc a ante feugiat';
txt1.querySelector('p').textContent = 'Nunc a ante feugiat, hendrerit nunc sed, tristique ipsum. In hac habitasse platea dictumst. Etiam dapibus mattis nulla a consequat. Phasellus nec nunc et dui condimentum tristique.';
block.appendChild(txt1);

let txt2 = document.importNode(templ.content, true);
txt2.querySelector('h3').textContent = 'Ut consequat auctor enim et dictum';
txt2.querySelector('p').textContent = 'Ut consequat auctor enim et dictum. Maecenas venenatis et diam porta egestas. Suspendisse id erat lorem. Aenean consequat magna vitae eleifend accumsan. Suspendisse rhoncus pulvinar interdum. Aliquam vitae diam sed massa fermentum elementum.';
block.appendChild(txt2);

let txt3 = document.importNode(templ.content, true);
txt3.querySelector('h3').textContent = 'Sed ultricies mauris quam';
txt3.querySelector('p').textContent = 'Sed ultricies mauris quam, vel feugiat leo iaculis vitae. Donec nulla ex, maximus ac dapibus posuere, sagittis at nisi.';
block.appendChild(txt3);

let $span = document.createElement('span');
let $text9 = document.createTextNode('Практику выполнила: Саначева Люба 19-ОИ');  
$span.append($text9);
$span.className = 'span';
document.body.append($span);

let $br = document.createElement('br');
document.body.append($br);

let $span1 = document.createElement('span');
let $text10 = document.createTextNode('© ГБПОУ "Пермский краевой колледж "ОНИКС"');  
$span1.append($text10);
$span1.className = 'span1';
document.body.append($span1);