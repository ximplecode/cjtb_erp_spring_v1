(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "cell" :
            			{
            				"class" :
            				[
            					{
            						"pdColorChange" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#ff0000")
            														}
            													}
            												}
            											}
            										},
            										"summary" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"font" : nexacro.FontObject("bold 12px/normal \"Gulim\""),
            															"color" : nexacro.ColorObject("#ff0000")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				]
            			}
		},
		{
            "includeStatusMap" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();

	};
}
)();
