(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "cellbutton" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"class" :
            						[
            							{
            								"SmBtn" :
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
            																	"font" : nexacro.FontObject("normal 12px/normal \"함초롬돋움\""),
            																	"color" : nexacro.ColorObject("black")
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
            				}
            			},
            			"cell" :
            			{
            				"class" :
            				[
            					{
            						"font" :
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
            															"color" : nexacro.ColorObject("#c2d7fe")
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
