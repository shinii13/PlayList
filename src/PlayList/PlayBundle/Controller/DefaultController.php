<?php

namespace PlayList\PlayBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('PlayListPlayBundle:Default:index.html.twig');
    }
}
