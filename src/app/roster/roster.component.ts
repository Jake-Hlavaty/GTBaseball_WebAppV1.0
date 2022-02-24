import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  border: string;
  img: string;
 }

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent{
    tiles: Tile[] = [
    {text: '#1 Chandler Simpson', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2021/10/SimpsonC_PhotoDay_111621_DK-1020-742x1024.jpg", border: '3px double black'},
    {text: '#2 Kristian Campbell', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2021/10/CampbellK_PhotoDay_111621_DK-991-741x1024.jpg", border: '3px double black'},
    {text: '#3 Tres Gonzalez', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2019/09/GonzalezT_PhotoDay_111621_DK-247-742x1024.jpg", border: '3px double black'},
    {text: '#4 Kevin Parada', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2020/09/ParadaK_PhotoDay_111621_DK-304-742x1024.jpg", border: '3px double black'},
    {text: '#5 Colin Hall', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2018/06/HallC_PhotoDay_111621_DK-639-742x1024.jpg", border: '3px double black'},
    {text: '#6 Dalton Smith', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2019/09/SmithD_PhotoDay_111621_DK-744-742x1024.jpg", border: '3px double black'},
    {text: '#7 Jett Lovett', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2021/10/LovettJ_PhotoDay_111621_DK-662-741x1024.jpg", border: '3px double black'},
    {text: '#8 Tim Borden II', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2021/10/BordenT_PhotoDay_111621_DK-111-742x1024.jpg", border: '3px double black'},
    {text: '#9 Marquis Grissom, Jr.', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2020/09/GrissomM_PhotoDay_111621_DK-467-742x1024.jpg", border: '3px double black'},
    {text: '#10 Andrew Jenkins', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2019/09/JenkinsA_PhotoDay_111621_DK-360-742x1024.jpg", border: '3px double black'},
    {text: '#12 Jackson Finley', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2019/09/FinleyJ_PhotoDay_111621_DK-767-742x1024.jpg", border: '3px double black'},
    {text: '#14 John Anderson', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2020/09/AndersonJ_PhotoDay_111621_DK-615-741x1024.jpg", border: '3px double black'},
    {text: '#15 Jake Deleo', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2020/09/DeLeoJ_PhotoDay_111621_DK-721-741x1024.jpg", border: '3px double black'},
    {text: '#18 Tyler Hare', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2021/10/HareT_PhotoDay_111621_DK-790-741x1024.jpg", border: '3px double black'},
    {text: '#19 Cort Roedig', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2019/01/RoedigC_PhotoDay_111621_DK-496-742x1024.jpg", border: '3px double black'},
    {text: '#20 Cole Mcnamee', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2021/10/McNameeC_PhotoDay_111621_DK-85-742x1024.jpg", border: '3px double black'},
    {text: '#21 Luke Bartnicki', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2019/01/BartnickiL_PhotoDay_111621_DK-382-741x1024.jpg", border: '3px double black'},
    {text: '#22 Chance Huff', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2020/09/HuffC_PhotoDay_111621_DK-404-741x1024.jpg", border: '3px double black'},
    {text: '#23 Stephen Reid', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2019/09/ReidS_PhotoDay_111621_DK-276-742x1024.jpg", border: '3px double black'},
    {text: '#24 Tervell Johnson', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2020/09/JohnsonTer_PhotoDay_111621_DK-554-742x1024.jpg", border: '3px double black'},
    {text: '#25 Drew Compton', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2019/09/ComptonD_PhotoDay_111621_DK-218-741x1024.jpg", border: '3px double black'},
    {text: '#26 Cody Carwile', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2021/10/CarwileC_011822_DK-61-742x1024.jpg", border: '3px double black'},
    {text: '#27 Dawson Brown', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2020/09/BrownD_PhotoDay_111621_DK-588-742x1024.jpg", border: '3px double black'},
    {text: '#28 Logan Mcguire', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2021/10/McGuireL_PhotoDay_111621_DK-900-742x1024.jpg", border: '3px double black'},
    {text: '#29 Christian Okerholm', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2021/10/OkerholmC_011822_DK-84-742x1024.jpg", border: '3px double black'},
    {text: '#31 Camron Hill', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2021/10/HillC_PhotoDay_111621_DK-931-742x1024.jpg", border: '3px double black'},
    {text: '#32 Joesph Mannelly', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2018/06/MannellyJ_PhotoDay_111621_DK-46-742x1024.jpg", border: '3px double black'},
    {text: '#35 Bradley Frye', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2021/10/FryeB_PhotoDay_111621_DK-976-742x1024.jpg", border: '3px double black'},
    {text: '#36 Sam Crawford', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2018/06/CrawfordS_PhotoDay_111621_DK-12-741x1024.jpg", border: '3px double black'},
    {text: '#37 Xander Stephens', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2020/09/StephensX_PhotoDay_111621_DK-185-741x1024.jpg", border: '3px double black'},
    {text: '#38 Jack Rubenstein', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2021/10/RubensteinJ_PhotoDay_111621_DK-430-742x1024.jpg", border: '3px double black'},
    {text: '#39 Brandon Prince', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2021/10/PrinceB_PhotoDay_111621_DK-846-741x1024.jpg", border: '3px double black'},
    {text: '#40 John Giesler', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2021/10/GieslerJ_011822_DK-38-742x1024.jpg", border: '3px double black'},
    {text: '#41 Zach Maxwell', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2019/09/MaxwellZ_PhotoDay_111621_DK-162-742x1024.jpg", border: '3px double black'},
    {text: '#42 Jadyn Jackson', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2019/09/JacksonJ_PhotoDay_111621_DK-136-741x1024.jpg", border: '3px double black'},
    {text: '#43 Nicholas Romano', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2021/10/RomanoN_PhotoDay_111621_DK-868-742x1024.jpg", border: '3px double black'},
    {text: '#45 Cameron Clines', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2021/10/ClinesC_011822_DK-03-742x1024.jpg", border: '3px double black'},
    {text: '#46 Ben King', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2019/09/KingB_PhotoDay_111621_DK-537-741x1024.jpg", border: '3px double black'},
    {text: '#48 Josiah Siegel', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2019/09/SiegelJ_PhotoDay_111621_DK-823-741x1024.jpg", border: '3px double black'},
    {text: '#50 Carrter Daniels', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2021/10/DanielsC_011822_DK-190-741x1024.jpg", border: '3px double black'},
    {text: '#51 Aeden Finateri', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2021/10/FinateriA_PhotoDay_111621_DK-953-742x1024.jpg", border: '3px double black'},
    {text: '#55 John Medich', cols: 1, rows: 1 , img: "https://ramblinwreck.com/wp-content/uploads/2020/09/MedichJ_PhotoDay_111621_DK-686-741x1024.jpg", border: '3px double black'},


    ];
}
