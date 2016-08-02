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



        $em = $this->getDoctrine()->getManager();
        $query = $em->createQuery(
            'SELECT p
                FROM PlayListPlayBundle:PlayList p
                where p.year like :yearSearch AND 
                      p.author like :author AND 
                      p.style like :style
                ORDER BY p.' . $sortiterm . ' ' . $sorttype
        );
        $query->setParameters(array(
            'yearSearch' => '%' . $year . '%',
            'author' => '%' . $author . '%',
            'style' => '%' . $style . '%',


        ));

        $blog = $query->getResult();

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
