export default {

	name: 'prism',

	initialize(instance) {

		if (Prism) {

			Prism.languages.sql = {
				'comment': {
					pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
					lookbehind: true
				},
				'string': {
					pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
					greedy: true,
					lookbehind: true
				},
				'variable': /[$][\w.]+/,
				'function': /\b(?:count|(?:(array|crypto|geo|http|is|math|parse|rand|string|time|type)::[\w]+)(::[\w]+)?)(?=\s*\()|(?:fn(::[\w]+)?\s*->( function\(\))?)/i,
				'keyword': /\b(?:ASC|AS|ASSERT|BEGIN( TRANSACTION)?|CANCEL( TRANSACTION)?|COLUMNS|COMMIT( TRANSACTION)?|CONTENT|CREATE|DATABASE|DB|DEFINE|DELETE|DESC|DESCRIBE|DIFF|DROP|ELSE|END|ES256|ES384|ES512|EVENT|FETCH|FIELD|FOR|FROM|GROUP( BY)?|HS256|HS384|HS512|IF|INDEX|INFO|INSERT(( IGNORE)? INTO)?|INTO|KILL|LET|LIMIT( BY)?|LIVE|LOGIN|MERGE|NAMESPACE|NS|ON DUPLICATE KEY UPDATE|ON|ORDER( BY)?|PASSHASH|PASSWORD|PERMISSIONS|PS256|PS384|PS512|RELATE|REMOVE|REPLACE|RETURN|RS256|RS384|RS512|SCHEMAFULL|SCHEMALESS|SCOPE|SELECT|SESSION|SET|SIGNIN|SIGNUP|SPLIT( ON)?|START( AT)?|TABLE|THEN|TIMEOUT|TOKEN|TYPE|UNIQUE|UPDATE|USE|VALUE|VALUES|VERSION|WHEN|WHERE)\b/,
				'connector': /[.]|<->|<-|->/,
				'nothing': /\b(?:EMPTY|NONE|NULL|VOID)\b/i,
				'boolean': /\b(?:TRUE|FALSE)\b/i,
				'record': /\b[\w\d]+[:][\w\d]+\b/i,
				'duration': /[1234567890]+(ns|µs|ms|s|m|h|d|w)/i,
				'number': /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
				'cast': /[<](bool|int|float|string|number|decimal|datetime|duration)[>]/,
				'operator': /==|!=|\*=|\?=|=|!~|\*~|\?~|~|<=|<|>=|>|\+|-|\*|×|∙|\/|÷|∋|∌|∈|∉|⊇|⊃|⊅|⊆|⊂|⊄|&&|\|\||\b(?:AND|OR|IS NOT|IS|CONTAINS ALL|CONTAINS NONE|CONTAINS SOME|CONTAINS NOT|CONTAINS|ALL INSIDE|NONE INSIDE|SOME INSIDE|NOT INSIDE|INSIDE|OUTSIDE|INTERSECTS)\b/i,
				'punctuation': /[;[\](){}`,]/,
			};

			Prism.languages.shell = {
				'comment': /#.*$/m,
				'command': {
					pattern: /(%).*$/m,
					lookbehind: true,
				},
				'prompt': /^.*%/m,
			};

		}

	},

}
