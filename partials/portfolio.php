
			<?php
				$pages = glob('*.php');
					$pages = array_reverse($pages);
						$menu = '<ul class="menu controls"';
							$strana ='left';

   $current_page = basename($_SERVER['SCRIPT_NAME'], '.php');

		foreach ($pages as $file) {
			$page_name = basename ($file, '.php');
					$menu.='<li data-from=" '.$strana.' "';

					if ($current_page == $page_name) {$menu.='class="selected"'; }
        $menu .= '><a href="' . $file . '">' . ucfirst(get_file_name($file)) . '</a></li>';


				        $strana = ($strana == 'left') ? 'right' : 'left';

					}
				echo $menu.'</ul></div>';

			function get_file_name($file_name){
			      $file_name = basename($file_name, ".php");
      			  if ($file_name == 'index')
        {
            return 'Alles';
			}
			return $file_name;
		}

						?>
                </div>
