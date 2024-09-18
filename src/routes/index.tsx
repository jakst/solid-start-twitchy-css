import { createAsync } from "@solidjs/router"

export default function Home() {
	const data = createAsync(() => Promise.resolve("data"))

	return (
		<main class="main">
			{data()}

			<div class="square solid">solid</div>
			<div class="square twitchy">twitchy</div>
			<div class="square &twitchy">twitchy</div>
		</main>
	)
}
