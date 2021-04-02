import * as chalk from 'chalk'
import * as log4js from 'log4js'
import { INFO } from './userInfo'
const log = console.log
type _Logs = {
	(temp: string): void
}

log4js.configure({
	appenders: {
		Notice: { type: 'file', filename: 'logs/notice.log', compress: true },
		Count: { type: 'file', filename: 'logs/count.log', compress: true },
		Mail: { type: 'file', filename: 'logs/mail.log', compress: true },
		Blogs: { type: 'file', filename: 'logs/blogs.log', compress: true },
		Error: { type: 'file', filename: 'logs/error.log', compress: true },
	},
	categories: {
		default: { appenders: ['Notice'], level: 'info' },
		Mail: { appenders: ['Mail'], level: 'info' },
		Blogs: { appenders: ['Blogs'], level: 'info' },
		Error: { appenders: ['Error'], level: 'error' },
		Count: { appenders: ['Count'], level: 'info' },
	},
})
export const Logger = log4js.getLogger('Notice')
export const LoggerErr = log4js.getLogger('Error')
export const LoggerCount = log4js.getLogger('Count')
export const LoggerMail = log4js.getLogger('Mail')
export const LoggerBlogs = log4js.getLogger('Blogs')

export const log4Info: _Logs = (info) => {
	INFO.Logger && log(chalk.green(info))
}

export const log4Error = (err: unknown) => {
	INFO.Logger && log(chalk.red(err))
}

export const log4Notice: _Logs = (note) => {
	INFO.Logger && log(chalk.yellow(note))
}

export const log4Others: _Logs = (other) => {
	INFO.Logger && log(chalk.blue(other))
}
