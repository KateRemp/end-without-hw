import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
	const initialState = [
		{ id: 86, value: 0, name: "Ненужная вещь", price: "200" },
		{ id: 9, value: 4, name: "Ложка" },
		{ id: 0, value: 0, name: "Вилка" },
		{ id: 8, value: 0, name: "Тарелка" },
		{ id: 4, value: 0, name: "Набор минималиста" },
	];

	const [counters, setCounters] = useState(initialState);
	const handleDelete = (id) => {
		const newCounters = counters.filter((c) => c.id !== id);
		setCounters(newCounters);
	};
	const handleReset = () => {
		setCounters(initialState);
		console.log("handle reset");
	};


	//Вариант 1. через index с findIndex()

	const handleIncrement = (i) => {
		const findIndex = counters.findIndex(item => item.id === i)
		setCounters(prevValue => {
			return [
				...prevValue
			]
		})
		counters[findIndex].value += 1
	}


	const handleDecrement = (i) => {
		const findIndex = counters.findIndex(item => item.id === i)
		setCounters(prevValue => {
			return [
				...prevValue
			]
		})
		counters[findIndex].value -= 1
	}


	//Вариант 2. через id и map()
	/*
		const handleIncrement = (id) => {
			setCounters(prevValue => {
				return [
					...prevValue
				]
			})
			const n = counters.filter((a) => {
				return a.id === id
			})
			n.map(s => {
				s.value += 1
			})
		}
	
		const handleDecrement = (id) => {
			setCounters(prevValue => {
				return [
					...prevValue
				]
			})
			const n = counters.filter((a) => {
				return a.id === id
			})
			n.map(s => {
				s.value -= 1
			})
		}
	*/


	return (
		<>
			{counters.map((count) => (
				<Counter
					key={count.id}
					onDelete={handleDelete}
					onIncrement={handleIncrement}
					onDecrement={handleDecrement}
					{...count} />
			))}
			<button
				className='btn btn-primary btn-sm m-2'
				onClick={handleReset}
			>
				Сброс
			</button>
		</>
	);
};
export default CountersList;
