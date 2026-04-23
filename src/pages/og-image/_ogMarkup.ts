import { html } from "satori-html";
import { siteConfig } from "@/site.config";

// OG image markup, use https://og-playground.vercel.app/ to design your own.
export const ogMarkup = (title: string, pubDate: string) =>
	html`<div tw="flex flex-col w-full h-full bg-[#08111b] text-[#c6d3df]">
		<div tw="flex flex-col flex-1 w-full justify-center px-14 py-12">
			<p tw="mb-6 text-2xl text-[#93a9bd]">${pubDate}</p>
			<h1 tw="text-6xl font-bold leading-snug text-white">${title}</h1>
		</div>
		<div tw="flex items-center justify-between w-full border-t border-[#2e6a97] px-14 py-10 text-xl">
			<div tw="flex items-center">
				<div
					tw="flex h-[58px] w-[58px] items-center justify-center rounded-[14px] bg-[#16324d] text-[34px] font-bold text-white"
				>
					L
				</div>
				<div tw="ml-4 flex flex-col">
					<p tw="text-[24px] font-semibold text-white">${siteConfig.title}</p>
					<p tw="text-[18px] text-[#93a9bd]">European railways, trains, public transport</p>
				</div>
			</div>
			<p tw="text-[#93a9bd]">by ${siteConfig.author}</p>
		</div>
	</div>`;
