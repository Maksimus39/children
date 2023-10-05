import React, {useState} from 'react';
import './App.css';
import {SuperButton} from "./components/SuperButton";
import {SuperTodolist} from "./components/SuperTodolist";


function App() {
    const tasks = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]

    return (
        <>
            <SuperButton onClick={() => {}} color={'red'}>REDButton</SuperButton>
            <SuperButton onClick={() => {}} color={'secondary'}>BlueButton</SuperButton>
            <SuperButton onClick={() => {}} >DefaultButton</SuperButton>
            <SuperButton onClick={() => {}} disabled >DisabledButton</SuperButton>

            <hr/>

            <SuperTodolist tasks={tasks}>
                <SuperButton onClick={() => {}} color={'red'}>REDButton</SuperButton>
                <SuperButton onClick={() => {}} color={'secondary'}>BlueButton</SuperButton>
               <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi aspernatur at
                   atque cupiditate delectus, dolorem doloremque dolorum error eveniet fugiat id illo in
                   incidunt iusto modi molestiae obcaecati officia quas quidem quod ratione sapiente similique
                   suscipit tempore velit veniam, vero voluptas voluptatibus. Amet consequatur ducimus explicabo
                   obcaecati placeat.
               </p>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi aspernatur at
                    atque cupiditate delectus, dolorem doloremque dolorum error eveniet fugiat id illo in
                    incidunt iusto modi molestiae obcaecati officia quas quidem quod ratione sapiente similique
                    suscipit tempore velit veniam, vero voluptas voluptatibus. Amet consequatur ducimus explicabo
                    obcaecati placeat.
                </p>
            </SuperTodolist>

            <SuperTodolist tasks={tasks}>
                <SuperButton onClick={() => {}} color={'red'}>REDButton</SuperButton>
                <SuperButton onClick={() => {}} color={'secondary'}>BlueButton</SuperButton>
                <SuperButton onClick={() => {}} color={'secondary'}>BlueButton</SuperButton>
                <SuperButton onClick={() => {}} color={'secondary'}>BlueButton</SuperButton>
                           <input type="text"/>
                             <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi aspernatur at
                    atque cupiditate delectus, dolorem doloremque dolorum error eveniet fugiat id illo in
                    incidunt iusto modi molestiae obcaecati officia quas quidem quod ratione sapiente similique
                    suscipit tempore velit veniam, vero voluptas voluptatibus. Amet consequatur ducimus explicabo
                    obcaecati placeat.
                </p>
            </SuperTodolist>

            <SuperTodolist tasks={tasks}>

                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi aspernatur at
                    atque cupiditate delectus, dolorem doloremque dolorum error eveniet fugiat id illo in
                    incidunt iusto modi molestiae obcaecati officia quas quidem quod ratione sapiente similique
                    suscipit tempore velit veniam, vero voluptas voluptatibus. Amet consequatur ducimus explicabo
                    obcaecati placeat.
                </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi aspernatur at
                    atque cupiditate delectus, dolorem doloremque dolorum error eveniet fugiat id illo in
                    incidunt iusto modi molestiae obcaecati officia quas quidem quod ratione sapiente similique
                    suscipit tempore velit veniam, vero voluptas voluptatibus. Amet consequatur ducimus explicabo
                    obcaecati placeat.
                </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi aspernatur at
                    atque cupiditate delectus, dolorem doloremque dolorum error eveniet fugiat id illo in
                    incidunt iusto modi molestiae obcaecati officia quas quidem quod ratione sapiente similique
                    suscipit tempore velit veniam, vero voluptas voluptatibus. Amet consequatur ducimus explicabo
                    obcaecati placeat.
                </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi aspernatur at
                    atque cupiditate delectus, dolorem doloremque dolorum error eveniet fugiat id illo in
                    incidunt iusto modi molestiae obcaecati officia quas quidem quod ratione sapiente similique
                    suscipit tempore velit veniam, vero voluptas voluptatibus. Amet consequatur ducimus explicabo
                    obcaecati placeat.
                </p>
            </SuperTodolist>

        </>
    );
}


export default App;
