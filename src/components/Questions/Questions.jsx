import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-8 my-8 mt-8 px-5">
                <div className="p-4 border border-gray-300 shadow-md rounded-lg bg-green-200">
                    <h3 className="text-3xl sm:text-2xl font-bold text-gray-800">What is the difference between props and state ?</h3>
                    <p>Props are used to pass data from a parent component to a child component, while state is used to manage data within a component itself. Props are read-only and cannot be modified, while state is mutable and can be updated using setState().</p>
                </div>
                <div className="p-4 border border-gray-300 shadow-md rounded-lg bg-blue-200">
                    <h3 className="text-3xl sm:text-2xl  font-bold text-gray-800">How useState works in react?</h3>
                    <p>In simple terms, useState is a hook in React that allows functional components to have state. It works by returning an array with two values: the current state value and a function to update the state value. The first value in the array is the current state value, and the second value is a function that can be used to update the state value. The initial state value can be passed to useState as an argument. Whenever the state is updated, the component re-renders to reflect the new state value.</p>
                </div>

                <div className="p-4 border border-gray-300 shadow-md rounded-lg bg-yellow-200">
                    <h3 className="text-3xl sm:text-2xl  font-bold text-gray-800">What can do useEffct except loading data?</h3>
                    <p>useEffect in React can do more than just loading data. In simple terms, useEffect is a hook that allows you to execute code in response to changes in props or state, or when the component is mounted or unmounted. It is a flexible tool that can be used for a wide range of tasks, not just for loading data from an API..</p>
                </div>


                <div className="p-4 border border-gray-300 shadow-md rounded-lg bg-red-200">
                    <h3 className="text-3xl sm:text-2xl font-bold text-gray-800">How does React work?</h3>
                    <p>React works by creating a Virtual DOM, updating it when the state or props of a component change, and then reconciling the new Virtual DOM with the previous one to update the actual DOM. This process allows React to efficiently update the UI and keep it in sync with the state of the application.</p>
                </div>

            </div>
    );
};

export default Questions;