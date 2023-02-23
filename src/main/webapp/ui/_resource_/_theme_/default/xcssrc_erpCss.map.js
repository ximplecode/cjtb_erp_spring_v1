(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "Button" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"font" : nexacro.FontObject("normal 13px /normal \"NotoSansKR\""),
            						"color" : nexacro.ColorObject("white")
            					},
            					"mouseover" :
            					{
            						"color" : nexacro.ColorObject("white")
            					},
            					"selected" :
            					{
            						"color" : nexacro.ColorObject("white")
            					},
            					"focused" :
            					{
            						"color" : nexacro.ColorObject("white")
            					},
            					"pushed" :
            					{
            						"color" : nexacro.ColorObject("white")
            					}
            				}
            			},
            			"head" :
            			{
            				"parent" :
            				{
            					"datepicker" :
            					{
            						"parent" :
            						{
            							"Calendar" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 10px/normal \"NotoSansKR\"")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"weekband" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"Calendar" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("bold 10px/normal \"NotoSansKR\"")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"body" :
            			{
            				"parent" :
            				{
            					"datepicker" :
            					{
            						"parent" :
            						{
            							"Calendar" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Calendar" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cacddb")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cacddb")
            					}
            				}
            			},
            			"CalendarControl" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cacddb")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cacddb")
            					}
            				}
            			},
            			"dayitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"Calendar" :
            									{
            										"self" :
            										{
            											"mouseover" :
            											{
            											},
            											"selected" :
            											{
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Grid" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #b7b1b2,1px solid #b7b1b2,1px solid #b7b1b2"),
            						"font" : nexacro.FontObject("13px/normal \"NotoSansKR\"")
            					}
            				}
            			},
            			"cell" :
            			{
            				"parent" :
            				{
            					"row" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"color" : nexacro.ColorObject("#1435C1"),
            												"font" : nexacro.FontObject("13px/normal \"NotoSansKR\"")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"dropbutton" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("white")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"Combo" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #4364ed")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #4364ed")
            					}
            				}
            			},
            			"combolist" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #4364ed")
            							}
            						}
            					}
            				}
            			},
            			"listboxitem" :
            			{
            				"parent" :
            				{
            					"combolist" :
            					{
            						"parent" :
            						{
            							"Combo" :
            							{
            								"self" :
            								{
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("white")
            									},
            									"focused" :
            									{
            										"color" : nexacro.ColorObject("white")
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("white")
            									}
            								}
            							}
            						}
            					},
            					"ListBox" :
            					{
            						"self" :
            						{
            							"focused" :
            							{
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"MaskEdit" :
            			{
            				"self" :
            				{
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid  #4364ed")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid  #4364ed")
            					}
            				}
            			},
            			"TextArea" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid  #4364ed")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid  #4364ed")
            					}
            				}
            			},
            			"ListBox" :
            			{
            				"self" :
            				{
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid  #4364ed")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid  #4364ed")
            					}
            				}
            			},
            			"Spin" :
            			{
            				"self" :
            				{
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid  #4364ed")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid  #4364ed")
            					}
            				}
            			},
            			"Edit" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid  #4364ed")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid  #4364ed")
            					}
            				}
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
