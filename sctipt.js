$(document).ready(function() {
$('.button').click(function() {
	
  var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
	
  var quotes = ['Nie wiesz, co to prawdziwa strata. Można jej doświadczyć tylko wtedy, kiedy kochasz coś bardziej, niż siebie samego', 'Trudno być złym, kiedy świat ma do zaoferowania tyle piękna', 'Niektórzy mają tragedię we krwi', 'Każdy umiera, ale nie każdy tak naprawdę żyje', 'Przeszłość może boleć. Ale daje nam wybór - albo będziemy od niej uciekać, albo wyciągniemy z niej lekcję', 'W tej sekundzie, przysięgam, jesteśmy jednym z nieskończonością', 'Mówią, że kiedy spotykasz miłość swojego życia, czas się zatrzymuje. To prawda', 'Szczeście można znaleźć nawet w najciemniejszych chwilach, jeśli tylko nosi się w sobie światło', 'Śmiech potrafi być potężny. Czasem to jedyna broń, którą dysponujemy', 'Kwiat, który kwitnie mimo przeciwności losu, to najrzadszy i najpiękniejszy z nich wszystkich', 'Nawet mrok kiedyś przeminie. Wkrótce nadejdzie nowy dzień, a kiedy wzejdzie słońce, rozbłyśnie jaśniej, niż kiedykolwiek wcześniej', 'Przeszłość to tylko bajka, którą sobie opowiadamy', 'Jesteś tym, co kochasz, a nie tym, co inni kochają w Tobie', 'Niektórych ptaków nie powinno się trzymać w klatce. Są na to zbyt piękne', 'Nigdy nie bój się marzyć o czymś lepszym, słonko', 'Stań się tym, kim marzysz, żeby być', 'Niektóre nieskończoności są większe od innych nieskończoności', 'Kiedy spadająca gwiazda rozcina mrok i zamienia noc w dzień, pomyśl życzenie i pomyśl o mnie. Uczyń swoje życie spektakularnym. Ja tak zrobiłem', 'Pamiętamy bohaterów, ale to legendy nigdy nie umierają. Idź za głosem serca, a nie popełnisz błędu', 'Wiem, że szansa na sukces jest mała, ale czy to ważne? Odpowiedzi znajdujemy tylko wtedy, kiedy nie przestajemy próbować', 'Odważni może żyją krótko, ale ostrożni nie żyją w ogóle', 'Po raz pierwszy pozwólmy sobie być tymi, kim jesteśmy, kimkolwiek jesteśmy', 'Życie mija szybko. Jeśli czasem się nie zatrzymasz, żeby się nim ponapawać, łatwo je przegapić', 'Czasem kochamy kogoś tak bardzo, że musimy się powstrzymywać. Gdybyśmy znali siłę ich miłości, zabiłaby nas', 'Ta właściwa osoba będzie widziała dobro we wszystkim, co robisz, niezależnie od tego jaki jesteś', 'Dlaczego upadamy, Bruce? Po to, żeby nauczyć się, jak wstawać', 'Kiedyś patrzyliśmy w niebo i zastanawialiśmy się, jakie jest nasze miejsce w kosmosie. Teraz patrzymy pod nogi i gdybamy, czy jest dla nas miejsce wśród piachu', 'To szansy definiują nasze życia. Nawet te, które przegapiliśmy', 'Każda chwila jest dobra, żeby zmienić swoje życie'];
  
  var movies = ['- Buntownik z wyboru (1997)', '- American Beauty (1999)', '- Donnie Darko (2001)', '- Waleczne Serce (1996)', '- Król Lew (1994)', '- Charlie (2012)', '- Duża Ryba (2003)', '- Harry Potter i Więzień Azkabanu (2004)', '- Kto wrobił Królika Rogera (1998)', '- Mulan (1998)', '- Władca Pierścieni: Dwie Wieże (2002)', '- Ona (2013)', '- Adaptacja (2002)', '- Skazani na Shawshank (1994)', '- Incepcja (2010)', '- Rocky Horror Picture Show (1975)', '- Gwiazd naszych wina (2014)', '- Jack (1996)', '- Amatorzy sportu (1993)', '- Przed wschodem słońca (1995)', '- Pamiętnik Księżniczki (2001)', '- Powrót do Garden State (2004)', '- Wolny dzień Ferrisa Buellera (1986)', '- Chłopaki mojego życia (2001)', '- Juno (2007)', '- Batman: Początek (2005)', '- Interstellar (2013)', '- Ciekawy przypadek Benjamina Buttona (2008)', '- Vanilla Sky (2001)'];
	
	var random = Math.floor(Math.random() * colors.length);
  var randomQ = Math.floor(Math.random() * quotes.length);
  var randomM = Math.floor(Math.random() * movies.length);
  var rquote = quotes[randomQ];
  var rmovie = movies[randomQ];
	var rcolors = colors[random];
    
  $('#box .qt').animate({opacity:0}, 250, function() {
    $(this).animate({opacity:1}, 250);
    $(this).text(rquote);
  });
    $('#box p').animate({opacity:0}, 250, function() {
    $(this).animate({opacity:1}, 250);
    $(this).text(rmovie);
     });
    $('body, .button').animate({
        'backgroundColor' : rcolors}, 500);
      $('#box h2, #box p').animate({
        'color' : rcolors}, 500);
});

});