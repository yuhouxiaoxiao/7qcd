<?php

class DefaultApp extends MallbaseApp
{
    function index()
    {
        $this->assign('index', 1); // 标识当前页面是首页，用于设置导航状态
        $this->assign('icp_number', Conf::get('icp_number'));

        /* 热门搜素 */
        $this->assign('hot_keywords', $this->_get_hot_keywords());

        $this->_config_seo(array(
            'title' => Lang::get('mall_index') . ' - ' . Conf::get('site_title'),
        ));


        $this->assign('cate_fz', $this->_get_category(565));
        $this->assign('cate_tz', $this->_get_category(661));
        $this->assign('cate_ffz', $this->_get_category(709));
        $this->assign('cate_fl', $this->_get_category(766));
        $this->assign('cate_jxsb', $this->_get_category(835));





        $this->assign('page_description', Conf::get('site_description'));
        $this->assign('page_keywords', Conf::get('site_keywords'));
        $this->display('index.html');
    }

    function _get_hot_keywords()
    {
        $keywords = explode(',', conf::get('hot_search'));
        return $keywords;
    }

    function &_tree($gcategories)
    {
    import('tree.lib');
    $tree = new Tree();
    $tree->setTree($gcategories, 'cate_id', 'parent_id', 'cate_name');

    return $tree;
    }

    function _get_category($cate_id)
    {

        $gcategory_mod =& bm('gcategory', array('_store_id' => 0));


        $ids = $gcategory_mod->get_descendant_ids($cate_id,true);

        $gcategories = $gcategory_mod->get_lists($ids);



        $tree =& $this->_tree($gcategories);
        /* 先根排序 */
//        $sorted_gcategories = array();
//        $cate_ids = $tree->getChilds();
//        foreach ($cate_ids as $id)         {
//        $sorted_gcategories[] = array_merge($gcategories[$id], array('layer' => $tree->getLayer($id)));
//        }

        //$this->assign('gcategories', $sorted_gcategories);

//        $tree->setTree($gcategories, 'cate_id', 'parent_id', 'cate_name');
//
        $data = $tree->getArrayList(0);
        return $data;
    }






}

?>
