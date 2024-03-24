const {
	Router
} = require("express");
const {
	regexUrl,
	getBuffer,
	resError,
	loghandler
} = require("../library/functions");
const { Ephoto } = require("./../scrapping/ephoto");
const ephoto = new Ephoto();
const apikeyAndLimit = require("../library/apikeyAndLimit");
router = Router();
const creator = "CHAND";



router.get("/01" , async (req, res) => {
  const { url, text, text2 } = req.query;
  if (!url) return res.json(loghandler.noturl)
  if (!text) return res.json(loghandler.nottext)
  if (!text2) return res.json(loghandler.nottext2)
  if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
  await ephoto.image(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-66.html", url, [text, text2]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(() => res.json(loghandler.error));
});
router.get("/02" , async (req, res) => {
  const { url, text, text2 } = req.query;
  if (!url) return res.json(loghandler.noturl);
  if (!text) return res.json(loghandler.nottext);
  if (!text2) return res.json(loghandler.nottext2);
  if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
  await ephoto.image(res, "https://en.ephoto360.com/create-a-wanted-poster-for-one-piece-live-action-724.html", url, [text, text2]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(() => res.json(loghandler.error));
});






router.get("/1", async (req, res) => {
	text = req.query.text;
	if (!text) return resError(res, "masukkan parameter text");
	await ephoto.text(res, "https://en.ephoto360.com/create-text-by-name-effect-17.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/2", async (req, res) => {
	text = req.query.text;
	if (!text) return resError(res, "masukkan parameter text");
	await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-18.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/3", async (req, res) => {
	text = req.query.text;
	if (!text) return resError(res, "masukkan parameter text");
	await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-58.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/4", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-text-by-name-effect-59.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/5", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-71.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/6", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-61.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/7", async (req, res) => {
	text = req.query.text;
	if (!text) return resError(res, "masukkan parameter text");
	await ephoto.text(res, "https://en.ephoto360.com/create-text-by-name-effect-62.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/8", async (req, res) => {
	text = req.query.text;
	if (!text) return resError(res, "masukkan parameter text");
	await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-63.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/9", async (req, res) => {
	text = req.query.text;
	if (!text) return resError(res, "masukkan parameter text");
	await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-64.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/10", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-text-by-name-effect-70.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/11", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-68.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/12", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-69.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/13", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-72.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/14", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-73.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/15", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-74.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/16", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-75.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/17", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-76.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/18", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-77.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/19", async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-81.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/20", async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/create-eraser-deleting-text-effect-online-79.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/21", async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/dragon-fire-text-effect-80.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/22" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/text-effects-incandescent-bulbs-83.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/23" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/dark-green-typography-online-84.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/24" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/write-letters-on-the-leaves-85.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/25" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/text-on-cloth-effect-86.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/graffiti" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/text-graffiti-3d-208.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/metals" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/metal-star-text-online-109.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/blueneon" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/blue-neon-text-effect-117.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/typography2" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/make-typography-text-online-338.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/nightstars" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/stars-night-online-84.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/cloud" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/cloud-text-effect-139.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/caper" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/caper-cut-effect-184.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/horror" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/writing-horror-text-online-266.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/sunlight" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/sunlight-shadow-text-204.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/cake" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/birthday-cake-96.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/pig" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/lovely-cute-3d-text-effect-with-pig-397.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/hallowen" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/halloween-fire-text-online-83.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/leafgraphy" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/typography-online-leaf-autumn-358.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/banten" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/create-text-by-name-effect-58.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/writestatus" , async (req, res) => {
	const { text, text2 } = req.query
	if (!text || !text2) return resError(res, "masukkan parameter text & text2");
	await ephoto.text(res, "https://en.ephoto360.com/write-status-quotes-on-photo-online-free-455.html", [text, text2]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/scholes" , async (req, res) => {
	const { text, number } = req.query;
	if (!text || !Number(number)) return resError(res, "masukkan parameter text & number, parameter number berupa angka");
	await ephoto.text(res, "https://en.ephoto360.com/paul-scholes-shirt-foot-ball-335.html", [text, number]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/heated" , async (req, res) => {
	const { text, text2 } = req.query;
	if (!text || !text2) return resError(res, "masukkan parameter text & text2");
	await ephoto.text(res, "https://en.ephoto360.com/heated-steel-lettering-effect-65.html", [text, text2]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/buoys" , async (req, res) => {
	const { text, text2 } = req.query;
	if (!text || !text2) return resError(res, "masukkan parameter text & text2");
	await ephoto.text(res, "https://en.ephoto360.com/write-letters-on-life-buoys-484.html", [text, text2]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/quotestatus" , async (req, res) => {
	const { text, text2 } = req.query;
	if (!text || !text2) return resError(res, "masukkan parameter text & text2");
	await ephoto.text(res, "https://en.ephoto360.com/create-typography-status-quotes-images-online-for-free-452.html", [text, text2]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/neonblue" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/foggy" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/foggy-rainy-text-effect-75.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/crank" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/animate-general-exam-crank-149.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("gif").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/puppy" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/create-puppy-cute-animated-online-478.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("gif").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/pubgavatar" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/create-pubg-style-glitch-video-avatar-554.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("mp4").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})










router.get("/vhs" , async (req, res) => {
	url = req.query.url;
	if (!url) return res.json(loghandler.noturl)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/vhs-glitch-photo-effect-online-editing-510.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/memories" , async (req, res) => {
	const url = req.query.url;
	if (!url) return res.json(loghandler.noturl)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/pencil-photo-travel-memories-367.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/notebook" , async (req, res) => {
	const { url, text, text2 } = req.query;
	if (!url) return res.json(loghandler.noturl)
	if (!text) return res.json(loghandler.nottext)
	if (!text2) return res.json(loghandler.nottext2)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/make-notebook-music-effect-346.html", url, [text, text2]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/glazing" , async (req, res) => {
	const { url, text } = req.query;
	if (!url) return res.json(loghandler.noturl)
	if (!text) return res.json(loghandler.nottext)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/create-a-rain-glazing-frame-effect-284.html", url, [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/flower" , async (req, res) => {
	url = req.query.url;
	if (!url) return res.json(loghandler.noturl)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/fall-flower-photo-effects-130.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/heart" , async (req, res) => {
	url = req.query.url;
	if (!url) return res.json(loghandler.noturl)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/fire-heart-123.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/smoke" , async (req, res) => {
	url = req.query.url;
	if (!url) return res.json(loghandler.noturl)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/smoke-photo-effects-119.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/handlefire" , async (req, res) => {
	url = req.query.url;
	if (!url) return res.json(loghandler.noturl)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/fire-photo-handle-effect-396.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/spectrum" , async (req, res) => {
	url = req.query.url;
	if (!url) return res.json(loghandler.noturl);
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/spectrum-audio-photo-frame-online-570.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/hp" , async (req, res) => {
	url = req.query.url;
	if (!url) return res.json(loghandler.noturl);
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/create-painting-effect-on-stone-background-online-722.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/tiger" , async (req, res) => {
	const text = req.query.text;
	if (!text) return res.json(loghandler.nottext);
	await ephoto.text(res, "https://en.ephoto360.com/create-digital-tiger-logo-video-effect-723.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("mp4").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/pencil" , async (req, res) => {
	const { text, text2 } = req.query;
	if (!text) return res.json(loghandler.nottext);
	if (!text2) return res.json(loghandler.nottext2);
	await ephoto.radio_text(res, "https://en.ephoto360.com/create-a-pencil-sketch-logo-online-719.html", [text, text2]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/arrow" , async (req, res) => {
	const text = req.query.text;
	if (!text) return res.json(loghandler.nottext);
	await ephoto.radio_text(res, "https://en.ephoto360.com/create-multicolored-signature-attachment-arrow-effect-714.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/anonymous" , async (req, res) => {
	const text = req.query.text;
	if (!text) return res.json(loghandler.nottext);
	await ephoto.radio_text(res, "https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/aov" , async (req, res) => {
	const text = req.query.text;
	if (!text) return res.json(loghandler.nottext);
	await ephoto.radio_text(res, "https://en.ephoto360.com/create-beautiful-shimmering-aov-wallpapers-full-hd-for-mobile-643.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/warface" , async (req, res) => {
	const text = req.query.text;
	if (!text) return res.json(loghandler.nottext);
	await ephoto.radio_text(res, "https://en.ephoto360.com/create-a-cover-of-warface-online-243.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/ml" , async (req, res) => {
	const text = req.query.text;
	if (!text) return res.json(loghandler.nottext);
	await ephoto.radio_text(res, "https://en.ephoto360.com/make-mobile-legends-wallpaper-full-hd-for-mobile-454.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});

module.exports = router;