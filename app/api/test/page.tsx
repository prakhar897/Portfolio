const response = {
	status: "Ok",
	message: "Hello World",
};

const page = () => {
	return <pre id="api">{JSON.stringify(response, null, 2)}</pre>;
};

export default page;
