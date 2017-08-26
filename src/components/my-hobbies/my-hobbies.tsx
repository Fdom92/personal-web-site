import { Component } from '@stencil/core';


@Component({
    tag: 'my-hobbies',
    styleUrl: 'my-hobbies.scss'
})
export class MyHobbies {

    render() {
        return (
            <div class="hobbies">
                <img src="../assets/travel.svg" alt="Travel"/>
                <img src="../assets/water-activities.svg" alt="Water Activities"/>
                <img src="../assets/snowboard.svg" alt="Snowboard"/>
                <img src="../assets/coding.svg" alt="Coding"/>
                <img src="../assets/films.svg" alt="Films"/>
            </div>
        );
    }
}