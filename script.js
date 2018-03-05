
			<div>
<?php 
		$et2 = new Etape(2, $this->id);
		ob_start();
		$et2->getFormulaire();
		$div_etape = ob_get_clean();
		//$div_etape = str_replace("\r\n",'',$div_etape);
		$div_etape = str_replace("\t",'',$div_etape);
		$div_etape = str_replace(CHR(13),'',$div_etape);
		$div_etape = str_replace(CHR(10),'',$div_etape);
		$div_etape = str_replace('"','"',$div_etape);
		//$div_etape = '\"'.$div_etape.'\"';
		$div_etape = str_replace("'","&#39;",$div_etape);
		//$div_etape = htmlentities($div_etape);
 
?>
				<a href = "javascript:ajouterEtape('etapes', '<?php echo $div_etape ?>');" > Ajouter une étape </a>
			</div>
