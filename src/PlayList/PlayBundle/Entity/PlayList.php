<?php
/**
 * Created by PhpStorm.
 * User: shinigami
 * Date: 25.07.2016
 * Time: 2:55
 */
namespace PlayList\PlayBundle\Entity;


    use Doctrine\ORM\Mapping as ORM;
    use JMS\Serializer\Annotation\ExclusionPolicy;
    use JMS\Serializer\Annotation\Expose;

    /**
     * @ORM\Entity(repositoryClass="PlayRepository")
     * @ORM\Table(name="PlayList")
     * @ExclusionPolicy("all")
     */
    class PlayList
    {
        /**
         * @ORM\Id
         * @ORM\Column(type="integer")
         * @ORM\GeneratedValue(strategy="AUTO")
         */
        protected $id;

        /**
         * @ORM\Column(type="string", length=100)
         * @Expose
         */
        private $author;

        /**
         * @ORM\Column(type="string", length=100)
         * @Expose
         */
        protected $composition;
        /**
         * @ORM\Column(type="string", length=100)
         * @Expose
         */
        protected $style;
        /**
         * @ORM\Column(type="integer")
         * @Expose
         */
        protected $year;
    
    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set author
     *
     * @param string $author
     * @return PlayList
     */
    public function setAuthor($author)
    {
        $this->author = $author;

        return $this;
    }

    /**
     * Get author
     *
     * @return string 
     */
    public function getAuthor()
    {
        return $this->author;
    }

    /**
     * Set composition
     *
     * @param string $composition
     * @return PlayList
     */
    public function setComposition($composition)
    {
        $this->composition = $composition;

        return $this;
    }

    /**
     * Get composition
     *
     * @return string 
     */
    public function getComposition()
    {
        return $this->composition;
    }

    /**
     * Set style
     *
     * @param string $style
     * @return PlayList
     */
    public function setStyle($style)
    {
        $this->style = $style;

        return $this;
    }

    /**
     * Get style
     *
     * @return string 
     */
    public function getStyle()
    {
        return $this->style;
    }

    /**
     * Set year
     *
     * @param integer $year
     * @return PlayList
     */
    public function setYear($year)
    {
        $this->year = $year;

        return $this;
    }

    /**
     * Get year
     *
     * @return integer 
     */
    public function getYear()
    {
        return $this->year;
    }
}
