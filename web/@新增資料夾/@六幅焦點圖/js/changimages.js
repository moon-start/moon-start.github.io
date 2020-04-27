function fodb(obj)
		  {
		   	//var p = document.getElementById("Fod_list").getElementsByTagName("div");
			var pb = obj.parentNode.parentNode.parentNode.parentNode;
			//alert(p.innerHTML);
			var pb1 = obj.parentNode.getElementsByTagName("div");
			var tb = pb.getElementsByTagName("tr")[1].getElementsByTagName("ul");
			var nb = pb1.length;
			for(i=0;i<nb;i++)
			{
				if(pb1[i] == obj)
				{
					pb1[i].className = "mob";
					tb[i].className = "dis";
				}
				else
				{
					pb1[i].className = "moardb";
					tb[i].className = "undis";				
				}
			}
		  }
		  function fodc(obj)
		  {
		   	//var p = document.getElementById("Fod_list").getElementsByTagName("div");
			var pc = obj.parentNode.parentNode.parentNode.parentNode;
			//alert(p.innerHTML);
			var pc1 = obj.parentNode.getElementsByTagName("div");
			var tc = pc.getElementsByTagName("tr")[1].getElementsByTagName("ul");
			var nc = pc1.length;
			for(i=0;i<nc;i++)
			{
				if(pc1[i] == obj)
				{
					pc1[i].className = "moc";
					tc[i].className = "dis";
				}
				else
				{
					pc1[i].className = "moardc";
					tc[i].className = "undis";				
				}
			}
		  }
		  function fodd(obj)
		  {
		   	//var p = document.getElementById("Fod_list").getElementsByTagName("div");
			var pd = obj.parentNode.parentNode.parentNode.parentNode;
			//alert(p.innerHTML);
			var pd1 = obj.parentNode.getElementsByTagName("div");
			var td = pd.getElementsByTagName("td")[0].getElementsByTagName("ul");
			var nd = pd1.length;
			for(i=0;i<nd;i++)
			{
				if(pd1[i] == obj)
				{
					pd1[i].className = "mod";
					td[i].className = "dis";
				}
				else
				{
					pd1[i].className = "moardd";
					td[i].className = "undis";				
				}
			}
		  }
function fodxa(obj)
		  {
		   	//var p = document.getElementById("Fod_list").getElementsByTagName("div");
			var pb = obj.parentNode.parentNode.parentNode.parentNode;
			//alert(p.innerHTML);
			var pb1 = obj.parentNode.getElementsByTagName("div");
			var tb = pb.getElementsByTagName("tr")[1].getElementsByTagName("ul");
			var nb = pb1.length;
			for(i=0;i<nb;i++)
			{
				if(pb1[i] == obj)
				{
					pb1[i].className = "moxa";
					tb[i].className = "dis";
				}
				else
				{
					pb1[i].className = "moaxrda";
					tb[i].className = "undis";				
				}
			}
		  }
function fodxb(obj)
		  {
		   	//var p = document.getElementById("Fod_list").getElementsByTagName("div");
			var pb = obj.parentNode.parentNode.parentNode.parentNode;
			//alert(p.innerHTML);
			var pb1 = obj.parentNode.getElementsByTagName("div");
			var tb = pb.getElementsByTagName("tr")[1].getElementsByTagName("ul");
			var nb = pb1.length;
			for(i=0;i<nb;i++)
			{
				if(pb1[i] == obj)
				{
					pb1[i].className = "moxb";
					tb[i].className = "dis";
				}
				else
				{
					pb1[i].className = "moaxrdb";
					tb[i].className = "undis";				
				}
			}
		  }
		  
function fodxc(obj)
		  {
		   	//var p = document.getElementById("Fod_list").getElementsByTagName("div");
			var pb = obj.parentNode.parentNode.parentNode.parentNode;
			//alert(p.innerHTML);
			var pb1 = obj.parentNode.getElementsByTagName("div");
			var tb = pb.getElementsByTagName("tr")[0].getElementsByTagName("ul");
			var nb = pb1.length;
			for(i=0;i<nb;i++)
			{
				if(pb1[i] == obj)
				{
					pb1[i].className = "moxc";
					tb[i].className = "dis";
				}
				else
				{
					pb1[i].className = "moaxrdc";
					tb[i].className = "undis";				
				}
			}
		  }
function fodxd(obj)
		  {
		   	//var p = document.getElementById("Fod_list").getElementsByTagName("div");
			var pb = obj.parentNode.parentNode.parentNode.parentNode;
			//alert(p.innerHTML);
			var pb1 = obj.parentNode.getElementsByTagName("div");
			var tb = pb.getElementsByTagName("tr")[1].getElementsByTagName("ul");
			var nb = pb1.length;
			for(i=0;i<nb;i++)
			{
				if(pb1[i] == obj)
				{
					pb1[i].className = "moxd";
					tb[i].className = "dis";
				}
				else
				{
					pb1[i].className = "moaxrdd";
					tb[i].className = "undis";				
				}
			}
		  }