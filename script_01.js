"use strict";
/***********************************************************************/
/*********                    Funktionen 01                   **********/
/***********************************************************************/

    // Funktionsdeklaration (body | callee)
    function greatings() {
        console.log( "Hallo Programmierer!" );                  // Der Block der Funktion, das was passieren soll, wenn Aufruf stattfindet
    }

    // Funktionsaufruf (call), aufrufbar von jeder Position in der Datei, auch vor der Funktionsdeklaration
    greatings();                                                // Die Funktion passiert erst , wenn der Aufruf startet, wenn kein Aufruf, dann keine Funktion


/***********************************************************************/
/*********                    Funktionen 02                   **********/
/***********************************************************************/

    // 02-a Parametisierung und Datenübergabe von innen
    ausgabeName1();

    function ausgabeName1() {
        let firstName1 = "Hosrt"                                                // bleibt nur innerhalb der Funktion
        console.log( "Hallo " + firstName1 + "!" );
    }
    // console.log( firstName1 );                                                 // Fehler: Scpoe (Geltungsbereich)

    // 02-a Parametisierung und Datenübergabe von außen
    function ausgabeName2( firstName1 ) {                                       // Parameter, die gleich beim Nutzen deklariert werden
        console.log( "Hallo " + firstName1 + "!" );
    }
    ausgabeName2( "Sabine" );                                                   // Die Ausgabe startet mit dem Aufruf und gibt die Variable als Argument mit


    // 02-b Parametisierung und Datenübergabe von außen mit Variablen
    function ausgabeName3( firstName3 ) {                                       // Parameter, die gleich beim Nutzen deklariert werden
        console.log( "Hallo " + firstName3 + "!" );
    }

    let eingabeFirstName3 = prompt( "Wie ist Dein Vorname?: " );
    ausgabeName3( eingabeFirstName3 );                                          // Die Ausgabe startet mit dem Aufruf und gibt die Variable als Argument mit


    // 02-c Parametisierung und Datenübergabe von außen mit multiblen Parametern
    function ausgabeName4( firstName4, lastName4 ) {                            // Parameter, die gleich beim Nutzen deklariert werden
        console.log( "Hallo " + firstName4 + " " + lastName4 + "!" );
    }

    let eingabeFirstName4 = prompt( "Wie ist Dein Vorname?: " );                // Wir fragen die Argument ab
    let eingabeLastName4 = prompt( "Wie ist Dein Nachname?: " );                // Wir fragen die Argument ab
    ausgabeName4( eingabeFirstName4, eingabeLastName4 );                        // Die Ausgabe startet mit dem Aufruf und gibt die Variablen als Argumente mit


/***********************************************************************/
/*********                    Funktionen 03                   **********/
/***********************************************************************/
    // 03-a Vorbereitung
    // Postulat: one function = one job (uncle bob)
    // SRP single responibility principe
    
    function ausgabeName5( firstName5, lastName5 ) {                             // Parameter, die gleich beim Nutzen deklariert werden
        // 1. Funktionalität: string composing
        const gap = " ";
        const outputStr = "Hallo " + firstName5 + gap + lastName5 + "!";

        // 2. Funtionalität: data output
        console.log( outputStr );
    }

    ausgabeName4( "Sandro", "Simperl" );                                          // Die Ausgabe startet mit dem Aufruf und gibt die Variablen als Argumente mit

    // 03-b Trennen der Funktionalität  |  return
    output( getString( "Sandro", "Simperl" ) );
        // 1. Funktionalität: string composing
        function getString( firstName6, lastName6 ) {
            const gap = " ";
            const outputStr = "Hallo " + firstName6 + gap + lastName6 + "!";
            return outputStr;
        }
    
        // 2. Funktionalität: string output
        function output( outputData6 ) {                                        // Wrapper Funktion in einer anderen Funktion zwecks Handling
            console.log( outputData6 );
        }