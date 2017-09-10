# Registo
Registo elettronico per Docenti

#Introduzione
E' stata pensata per offrire una applicazione web che consenta di gestire le dinamiche di registro presenze, registo lezioni e valutazione previste per le classi gestite da un insegnate.
L'insegnante avvia l'applicativo ed è in grado di:
- Avviare una lezione con un argomento
- Registrare gli eventuali assenti alla lezione
- Registrale le valutazioni dei presenti alla lezioni
- Registrare le annotazioni sulla lezione
- Correggere le assenze di un determinato giorno
- Correggere le valutazioni di un determinato studente
- Correggere l'argomento di una lezione o le annotazioni
- Inserire il calendario lezioni settimanale per classe
- Consulare il calendario lezioni per classe
- Inserire l'elenco degli studenti per classe
- Consultare l'elenco degli studenti per classe

#Tecnologie utilizzate
L'applicazione utilizza le seguenti:
- DotNetCore 1.0
- HTML5 + CSS3
- Javascript JQuery
- AngularJs v 1.5-4
 
#Architettura
L'applicazione si stuttura in un sistema WebApp che consuma dei servizi api offerti dall'application server.
Il controllo di validazione dei dati viene offerto via Javascript prima dell'invio dei dati stessi dalla WebApp.

#Modo d'uso
...

#Note conclusive
Non è stata implementata nessuno strumento di validazione del codice (ex Unit Test).
Non sono stati usati framework MVC
Non sono stati inseriti stili CSS
Non ci sono configurazioni multi ambiente per il database
