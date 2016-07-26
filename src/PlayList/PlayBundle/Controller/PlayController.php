<?php

namespace PlayList\PlayBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use JMS\Serializer\SerializerBuilder;
use Symfony\Component\HttpFoundation\Request;

class PlayController extends Controller
{
    public function indexAction()
    {
        $request = Request::createFromGlobals();
        $page =  $request->query->get('page');
        $volume =  $request->query->get('volume');
        $author =  $request->query->get('author');
        $style =  $request->query->get('style');
        $year =  $request->query->get('year');
        $sortiterm = $request->query->get('sortiterm');
        $sorttype = $request->query->get('sorttype');


        If ($author != '')
        {
            If ($style != '') {
                If ($year != '')
                    $filter = array('author' => $author, 'style' => $style, 'year' => $year);
                else
                    $filter = array('author' => $author, 'style' => $style);
            }
            else if ($year != '')
                $filter= array('author'=>$author, 'year'=>$year);
            else
                $filter= array('author'=>$author);

        }
        else
        {
            If ($style != '') {
                If ($year != '')
                    $filter = array('style' => $style, 'year' => $year);
                else
                    $filter = array('style' => $style);
            }
            else if ($year != '')
                $filter= array('year'=>$year);
            else
                $filter= array();
        }




        $em = $this->getDoctrine()->getManager();

        $blog = $em->getRepository('PlayListPlayBundle:PlayList')->findBy($filter,array($sortiterm => $sorttype));




        $response = new Response();
        for($i=($page-1)*$volume; ($i < count($blog) && $i<$page*$volume+1) ; $i++)
        {
            $blog1[($i-($page-1)*$volume)] = $blog[$i];
        };
        if (!$blog) {
            $response->headers->set('status','404');
        }
        else
        {
            $response->headers->set('Content-Type', 'application/json');
            $serializer = SerializerBuilder::create()->build();
            $json = $serializer->serialize($blog1, 'json');
            $response->setContent($json);
        }

        return $response;
    }
}
