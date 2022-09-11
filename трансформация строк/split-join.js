_.split('foo/bar', '/')

_.chain('foo/bar').split('/').head().value()
_.chain(['foo', 'bar']).join('/').toUpper().value()
