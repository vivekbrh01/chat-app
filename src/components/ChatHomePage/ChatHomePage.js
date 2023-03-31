import React, { useState, useRef } from "react";
import Auth from "../Auth";

import Cookies from "universal-cookie";
import ChatBox from "../ChatBox";

const cookies = new Cookies();

function ChatHomePage() {
	const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
	const [room, setRoom] = useState(null);

	const roomInputRef = useRef(null);

	return (
		<div>
			{isAuth ? (
				<>
					{room ? (
						<ChatBox room={room} />
					) : (
						<div>
							<input
								type="text"
								placeholder="Enter room name"
								ref={roomInputRef}
							/>
							<button onClick={() => setRoom(roomInputRef.current.value)}>
								Enter
							</button>
						</div>
					)}
				</>
			) : (
				<Auth setIsAuth={setIsAuth} />
			)}
		</div>
	);
}

export default ChatHomePage;
