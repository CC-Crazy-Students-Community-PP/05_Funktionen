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
        let firstName1 = "Hosrt"                                    // bleibt nur innerhalb der Funktion
        console.log( "Hallo " + firstName1 + "!" );
    }

    // console.log( firstName1 );                                     // Fehler: Scpoe (Geltungsbereich)

    // 02-a Parametisierung und Datenübergabe von außen
    function ausgabeName2(firstName1) {                             // Parameter, die gleich beim Nutzen deklariert werden
        console.log( "Hallo " + firstName1 + "!" );
    }

    ausgabeName2("Sabine");                                         // Die Ausgabe startet mit dem Aufruf und gibt die Variable als Argument mit