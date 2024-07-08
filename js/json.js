/*
 * Copyright (c) Sebastian Kucharczyk <kuchen@kekse.biz>
 * https://kekse.biz/ https://github.com/kekse1/json.js/
 * v0.2.1
 */

//
const DEFAULT_FILTER = true;

//
const _GLOBAL = (typeof window === 'undefined' ? global : window);
const _JSON = _GLOBAL.JSON;

class JSON
{
	static get JSON()
	{
		return _JSON;
	}

	static parse(_string, ... _args)
	{
		if(DEFAULT_FILTER)
		{
			_string = JSON.filter(_string, 'parse');
		}
		
		return _JSON.parse(_string, ... _args);
	}
	
	static stringify(_item, ... _args)
	{
		return _JSON.stringify(_item, ... _args);
	}
	
	static render(_item, ... _args)
	{
		return this.stringify(_item, ... _args);
	}
	
	static filter(_data, _type)
	{
		var open = '';
		var result = '';
	
		for(var i = 0; i < _data.length; ++i)
		{
			if(_data[i] === '\\')
			{
				if(open !== '*/' && i < (_data.length - 1))
				{
					result += '\\';

					if(_data[++i] === open)
					{
						result += '"';
					}
					else
					{
						result += _data[i];
					}
				}
			}
			else if(open)
			{
				if(_data.at(i, open))
				{
					if(open === '*/')
					{
						++i;
					}
					else
					{
						result += '"';
					}

					open = '';
				}
				else if(open !== '*/')
				{
					if(_data[i] === '"')
					{
						result += '\\"';
					}
					else
					{
						result += _data[i];
					}
				}
			}
			else if(_data.at(i, '/*'))
			{
				open = '*/';
				++i;
			}
			else if(_data[i] === '"' || _data[i] === '\'' || _data[i] === '`')
			{
				open = _data[i];
				result += '"';
			}
			else
			{
				result += _data[i];
			}

		}

		return result;
	}
}

export default JSON;
_GLOBAL.JSON = JSON;

//
if(typeof String.prototype._at !== 'function')
{
	Reflect.defineProperty(String.prototype, '_at', { value: String.prototype.at });

	Reflect.defineProperty(String.prototype, 'at', { value: function(_index, _needle, _case_sensitive = true)
	{
		if(arguments.length < 2)
		{
			return String.prototype._at.call(this, _index);
		}
		else if((_index = Math.getIndex(_index, this.length)) === null)
		{
			return (_needle.length === 0);
		}
		else if(_needle.length === 0)
		{
			return false;
		}
		else if(_needle.length > (this.length - _index))
		{
			return false;
		}

		var cmp = this.substr(_index, _needle.length);

		if(!_case_sensitive)
		{
			_needle = _needle.toLowerCase();
			cmp = cmp.toLowerCase();
		}

		return (cmp === _needle);
	}});
}

if(typeof Math.getIndex !== 'function')
{
	Reflect.defineProperty(Math, 'getIndex', { value: (_index, _length) => {
		if(_length < 1)
		{
			return null;
		}
		else if((_index %= _length) < 0)
		{
			_index = ((_length + _index) % _length);
		}

		return (_index || 0);
	}});
}

//
