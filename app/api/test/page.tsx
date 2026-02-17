const response = {
	status: "ok",
	message: "Hello World",
};

const page = () => {
	return <pre id="api">{JSON.stringify(response, null, 2)}</pre>;
};

export default page;
