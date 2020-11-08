package org.example.vue;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class IndexController {
	public IndexController() {}
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index() {
		System.out.println("hi index");
		return "index";
	}
}
