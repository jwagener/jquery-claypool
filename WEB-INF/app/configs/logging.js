/**
 * ClaypoolJS @VERSION - 
 *
 * Copyright (c) 2008-2009 ClaypoolJS
 *
 * dont confuse the Claypool and ClaypoolJs namespace.  the ClaypoolJS namespace 
 * is only used for the website.
 */

(function($){ 
    
   $.logging([
        { category:"ClaypoolJS",                 level:"INFO" },
        { category:"ClaypoolJS.Models",          level:"INFO" },
        { category:"ClaypoolJS.Views",           level:"INFO" },
        { category:"ClaypoolJS.Controllers",     level:"DEBUG" },
        { category:"ClaypoolJS.Service",         level:"DEBUG" },
        { category:"Claypool",                   level:"WARN" },
        { category:"Claypool.Server",            level:"WARN" },
        { category:"Claypool.MVC",               level:"WARN" },
        { category:"Claypool.IoC",               level:"WARN" },
        { category:"Claypool.AOP",               level:"WARN" },
        { category:"jQuery.E4X",                 level:"WARN" },
        { category:"root",                       level:"WARN" }
    ]);     
	
})(jQuery);
    
