export default {
	async fetch(request, env, ctx): Promise<Response> {
		console.log(request)
		return new Response('Hello World!');
	},
} satisfies ExportedHandler<Env>;
