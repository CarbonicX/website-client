const serverAddress: string = "https://server.carbonicx.top";

function server(route: string): string {
    return serverAddress + route;
}

export default server;
