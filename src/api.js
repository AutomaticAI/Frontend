let conversationId;
let lastMessageId;

export const fetchResponse = async chat => {
	try {
		// after depoloyment you should change the fetch URL below
		const response = await fetch('http://localhost:3080', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				message: chat[chat.length - 1].message,
				conversationId,
				lastMessageId
			})
		});

		const data = await response.json();
		conversationId = data.conversationId;
		lastMessageId = data.id;
		return data;
	} catch (error) {
		console.log(error);
	}
};
