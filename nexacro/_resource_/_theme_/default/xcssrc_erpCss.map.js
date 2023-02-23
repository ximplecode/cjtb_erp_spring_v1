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
            										"color" : nexacro.ColorObject("white"),
            										"font" : nexacro.FontObject("normal 900 10pt/normal \"Arial\"")
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
            												"color" : nexacro.ColorObject("white"),
            												"font" : nexacro.FontObject("normal 900 10pt/normal \"Arial\"")
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
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					}
            				}
            			},
            			"CalendarControl" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #d5d5d5")
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
            			"trackbar" :
            			{
            				"parent" :
            				{
            					"vscrollbar" :
            					{
            						"parent" :
            						{
            							"Grid" :
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
            			"Grid" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #b7b1b2,1px solid #b7b1b2,1px solid #b7b1b2")
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
            												"color" : nexacro.ColorObject("white")
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
            						"border" : nexacro.BorderObject("1px solid #10aea9")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #10aea9")
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
            								"border" : nexacro.BorderObject("1px solid #10aea9")
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
            						"border" : nexacro.BorderObject("1px solid  #10aea9")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid  #10aea9")
            					}
            				}
            			},
            			"TextArea" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid  #10aea9")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid  #10aea9")
            					}
            				}
            			},
            			"ListBox" :
            			{
            				"self" :
            				{
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid  #10aea9")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid  #10aea9")
            					}
            				}
            			},
            			"Spin" :
            			{
            				"self" :
            				{
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid  #10aea9")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid  #10aea9")
            					}
            				}
            			},
            			"Edit" :
            			{
            				"self" :
            				{
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid  #10aea9")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid  #10aea9")
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
