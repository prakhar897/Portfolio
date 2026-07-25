const response = {
	status: "0k",
	message: "Hello World",
};

const page = () => {
	return <pre id="api">{JSON.stringify(response, null, 2)}</pre>;
};

export default page;
