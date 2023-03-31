import React, { useState, useEffect } from "react";
import {
	addDoc,
	collection,
	serverTimestamp,
	onSnapshot,
	query,
	where,
	orderBy,
} from "firebase/firestore";

import { db, auth } from "../../firebase-config";

function ChatBox({ room }) {
	const [newMessage, setNewMessage] = useState("");
	const [messages, setMessages] = useState([]);

	const messagesRef = collection(db, "messages");

	useEffect(() => {
		const queryMessages = query(
			messagesRef,
			where("room", "==", room),
			orderBy("createdAt")
		);

		let listener = onSnapshot(queryMessages, (snapshot) => {
			let messages = [];

			snapshot.forEach((doc) => {
				messages.push({ ...doc.data(), id: doc.id });
			});
			setMessages(messages);
		});
		return () => listener();
	}, []);

	async function handleSubmit(e) {
		e.preventDefault();
		if (newMessage === "") return;
		await addDoc(messagesRef, {
			text: newMessage,
			createdAt: serverTimestamp(),
			user: auth.currentUser.displayName,
			room,
		});
		setNewMessage("");
	}
	return (
		<div>
			<ul>
				{messages.map((message, index) => {
					console.log(message, "message");
					return (
						<li key={message.id}>
							<p>
								<strong>{message.user}</strong>
							</p>
							<p>{message.text}</p>
						</li>
					);
				})}
			</ul>
			<form action="" onSubmit={(e) => handleSubmit(e)}>
				<input
					type="text"
					name="messge"
					id="message"
					value={newMessage}
					placeholder="Enter Your Message"
					onChange={(e) => setNewMessage(e.target.value)}
				/>
				<button type="submit">Send</button>
			</form>
		</div>
	);
}

export default ChatBox;
