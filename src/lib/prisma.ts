import { TelegramUserData } from "@telegram-auth/server";
import { db } from "./db";



export async function createUserOrUpdate(user: TelegramUserData) {
	console.log("++++", user)
	return db.user.upsert({
		where: {
			id: user.id.toString(),
		},
		create: {
			id: user.id.toString(),
			name: user.first_name,
			image: user.photo_url,
		},
		update: {
			name: user.first_name,
			image: user.photo_url,
		},
	});
}