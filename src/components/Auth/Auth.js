import React from "react";
import { signInWithPopup } from "firebase/auth";

import Cookies from "universal-cookie";
import { auth, provider } from "../../firebase-config";

const cookies = new Cookies();

function Auth({ setIsAuth }) {
	const signInWithGoogle = async () => {
		try {
			const result = await signInWithPopup(auth, provider);
			cookies.set("auth-token", result.user.accessToken);
			setIsAuth(true);
		} catch (error) {
			console.error("Error message: ", error);
		}
	};
	return (
		<div>
			<button onClick={() => signInWithGoogle()}>Sign in with google</button>
		</div>
	);
}

export default Auth;
