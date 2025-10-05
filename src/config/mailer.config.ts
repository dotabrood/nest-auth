import { MailerOptions } from '@nestjs-modules/mailer'
import { ConfigService } from '@nestjs/config'

import { isDev } from '@/libs/common/utils/is-dev.util'

export const getMailerCondfig = async (
	configService: ConfigService
): Promise<MailerOptions> => ({
	transport: {
		host: configService.getOrThrow<String>('MAIL_HOST'),
		port: configService.getOrThrow<number>('MAIL_PORT'),
		secure: !isDev(configService),
		auth: {
			user: configService.getOrThrow<String>('MAIL_LOGIN'),
			pass: configService.getOrThrow<String>('MAIL_PASSWORD')
		}
	},
	defaults: {
		from: 'dotabrood-pr <onboarding@resend.dev>'
	}
})
