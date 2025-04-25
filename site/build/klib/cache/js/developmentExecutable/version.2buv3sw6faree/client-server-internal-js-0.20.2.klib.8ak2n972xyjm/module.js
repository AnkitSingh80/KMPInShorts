(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-common-client-server-internal'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-common-client-server-internal'.");
    }
    globalThis['kobweb-common-client-server-internal'] = factory(typeof globalThis['kobweb-common-client-server-internal'] === 'undefined' ? {} : globalThis['kobweb-common-client-server-internal'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var CoroutineImpl = kotlin_kotlin.$_$.oa;
  var Unit_getInstance = kotlin_kotlin.$_$.u4;
  var protoOf = kotlin_kotlin.$_$.sc;
  var THROW_CCE = kotlin_kotlin.$_$.sg;
  var SequenceScope = kotlin_kotlin.$_$.md;
  var mutableListOf = kotlin_kotlin.$_$.l8;
  var removeFirst = kotlin_kotlin.$_$.v8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.y9;
  var initMetadataForLambda = kotlin_kotlin.$_$.sb;
  var THROW_IAE = kotlin_kotlin.$_$.tg;
  var enumEntries = kotlin_kotlin.$_$.sa;
  var Enum = kotlin_kotlin.$_$.hg;
  var initMetadataForClass = kotlin_kotlin.$_$.ob;
  var VOID = kotlin_kotlin.$_$.g;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.i2;
  var startsWith = kotlin_kotlin.$_$.cf;
  var endsWith = kotlin_kotlin.$_$.ee;
  var initMetadataForCompanion = kotlin_kotlin.$_$.pb;
  var toString = kotlin_kotlin.$_$.vc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var joinToString = kotlin_kotlin.$_$.w7;
  var sequence = kotlin_kotlin.$_$.vd;
  var first = kotlin_kotlin.$_$.p7;
  var removeSurrounding = kotlin_kotlin.$_$.ue;
  var removePrefix = kotlin_kotlin.$_$.se;
  var removeSuffix = kotlin_kotlin.$_$.te;
  var endsWith_0 = kotlin_kotlin.$_$.fe;
  var startsWith_0 = kotlin_kotlin.$_$.bf;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sh;
  var charArrayOf = kotlin_kotlin.$_$.za;
  var split = kotlin_kotlin.$_$.ze;
  var toMutableList = kotlin_kotlin.$_$.q9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var ensureNotNull = kotlin_kotlin.$_$.mh;
  var asSequence = kotlin_kotlin.$_$.o6;
  var mapNotNull = kotlin_kotlin.$_$.td;
  var firstOrNull = kotlin_kotlin.$_$.qd;
  var last = kotlin_kotlin.$_$.d8;
  var SuspendFunction1 = kotlin_kotlin.$_$.pa;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.e1;
  var objectCreate = kotlin_kotlin.$_$.rc;
  var get_lastIndex = kotlin_kotlin.$_$.a8;
  var replace = kotlin_kotlin.$_$.xe;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(RouteTree$Node$_get_nodes_$slambda_9kqj3, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(Match, 'Match', VOID, Enum);
  initMetadataForCompanion(Companion);
  initMetadataForClass(Node, 'Node');
  initMetadataForClass(RootNode, 'RootNode', RootNode, Node);
  initMetadataForClass(ChildNode, 'ChildNode', VOID, Node);
  initMetadataForClass(StaticNode, 'StaticNode', VOID, ChildNode);
  initMetadataForClass(DynamicNode, 'DynamicNode', VOID, ChildNode);
  initMetadataForClass(ResolvedEntry, 'ResolvedEntry');
  initMetadataForClass(RouteTree, 'RouteTree', RouteTree);
  initMetadataForClass(PatternMapper, 'PatternMapper');
  //endregion
  function _get__children__n7wjoz($this) {
    return $this._children_1;
  }
  function RouteTree$Node$createChild$lambda(it) {
    return '"' + it.sourceRoutePart_1 + '"';
  }
  function RouteTree$Node$_get_nodes_$slambda_9kqj3(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).invoke_b7agel_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_8w91ht_k$($this$sequence, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_b7agel_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.nodeQueue0__1 = mutableListOf([this.this$0__1]);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!!this.nodeQueue0__1.isEmpty_y1axqb_k$()) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            this.node1__1 = removeFirst(this.nodeQueue0__1);
            var tmp_0 = this;
            tmp_0.nodePath2__1 = ArrayList_init_$Create$();
            this.nodePath2__1.add_utx5q5_k$(this.node1__1);
            this.parent3__1 = this.node1__1.parent_1;
            while (!(this.parent3__1 == null)) {
              this.nodePath2__1.add_dl6gt3_k$(0, this.parent3__1);
              this.parent3__1 = this.parent3__1.parent_1;
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$this$sequence_1.yield_3xhcex_k$(this.nodePath2__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.nodeQueue0__1.addAll_4lagoh_k$(this.node1__1._children_1);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).create_8w91ht_k$ = function ($this$sequence, completion) {
    var i = new RouteTree$Node$_get_nodes_$slambda_9kqj3(this.this$0__1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).create_wyq9v6_k$ = function (value, completion) {
    return this.create_8w91ht_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function RouteTree$Node$_get_nodes_$slambda_9kqj3_0(this$0, resultContinuation) {
    var i = new RouteTree$Node$_get_nodes_$slambda_9kqj3(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_b7agel_k$($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var Match_SINGLE_instance;
  var Match_REST_instance;
  var Match_REST_OPTIONAL_instance;
  function values() {
    return [Match_SINGLE_getInstance(), Match_REST_getInstance(), Match_REST_OPTIONAL_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'SINGLE':
        return Match_SINGLE_getInstance();
      case 'REST':
        return Match_REST_getInstance();
      case 'REST_OPTIONAL':
        return Match_REST_OPTIONAL_getInstance();
      default:
        Match_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Match_entriesInitialized;
  function Match_initEntries() {
    if (Match_entriesInitialized)
      return Unit_getInstance();
    Match_entriesInitialized = true;
    Match_SINGLE_instance = new Match('SINGLE', 0);
    Match_REST_instance = new Match('REST', 1);
    Match_REST_OPTIONAL_instance = new Match('REST_OPTIONAL', 2);
  }
  var $ENTRIES;
  function Match(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_match__edde1g($this) {
    return $this.match_1;
  }
  function _get__name__kt6p95($this) {
    return $this._name_1;
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).tryCreate_3pbel9_k$ = function (parent, routePart, data) {
    if (startsWith(routePart, _Char___init__impl__6a9atx(123)) && endsWith(routePart, _Char___init__impl__6a9atx(125))) {
      return new DynamicNode(parent, routePart, data);
    }
    return null;
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Match_SINGLE_getInstance() {
    Match_initEntries();
    return Match_SINGLE_instance;
  }
  function Match_REST_getInstance() {
    Match_initEntries();
    return Match_REST_instance;
  }
  function Match_REST_OPTIONAL_getInstance() {
    Match_initEntries();
    return Match_REST_OPTIONAL_instance;
  }
  function Node(parent, sourceRoutePart, data) {
    parent = parent === VOID ? null : parent;
    this.parent_1 = parent;
    this.sourceRoutePart_1 = sourceRoutePart;
    this.data_1 = data;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp._children_1 = ArrayList_init_$Create$();
    this.children_1 = this._children_1;
    this.name_1 = this.sourceRoutePart_1;
    this.isRouteTerminator_1 = false;
  }
  protoOf(Node).get_parent_hy4reb_k$ = function () {
    return this.parent_1;
  };
  protoOf(Node).get_sourceRoutePart_h9idpk_k$ = function () {
    return this.sourceRoutePart_1;
  };
  protoOf(Node).set_data_k5a4tt_k$ = function (_set____db54di) {
    this.data_1 = _set____db54di;
  };
  protoOf(Node).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(Node).get_children_4cwbp4_k$ = function () {
    return this.children_1;
  };
  protoOf(Node).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Node).get_isRouteTerminator_8jl3dp_k$ = function () {
    return this.isRouteTerminator_1;
  };
  protoOf(Node).createChild_922k2c_k$ = function (routePart, data) {
    if (this.get_isRouteTerminator_8jl3dp_k$()) {
      // Inline function 'kotlin.error' call
      var message = 'User attempted to register an invalid route. "' + this.sourceRoutePart_1 + '" must be the last part of the route, but it was followed by "' + routePart + '".';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.run' call
    // Inline function 'com.varabyte.kobweb.navigation.Node.createChild.<anonymous>' call
    var tmp0 = this._children_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.navigation.Node.createChild.<anonymous>.<anonymous>' call
        if (element instanceof DynamicNode) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var existingDynamicNode = tmp$ret$1;
    if (!(existingDynamicNode == null)) {
      // Inline function 'kotlin.error' call
      var message_0 = 'User attempted to register a new route when a dynamic route is already set up that will capture it. "' + routePart + '" is being registered but "' + existingDynamicNode.sourceRoutePart_1 + '" already exists.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var tmp0_elvis_lhs = Companion_getInstance().tryCreate_3pbel9_k$(this, routePart, data);
    var node = tmp0_elvis_lhs == null ? new StaticNode(this, routePart, data) : tmp0_elvis_lhs;
    var tmp;
    if (node instanceof DynamicNode) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !this._children_1.isEmpty_y1axqb_k$();
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'kotlin.error' call
      var message_1 = 'User attempted to register a dynamic route that conflicts with one or more routes already set up. "' + routePart + '" is being registered but [' + joinToString(this._children_1, VOID, VOID, VOID, VOID, VOID, RouteTree$Node$createChild$lambda) + '] route(s) already exist.';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    this._children_1.add_utx5q5_k$(node);
    return node;
  };
  protoOf(Node).resolve_xt8n4r_k$ = function (remainingRouteParts) {
    var tmp0_safe_receiver = this.consume_eqss8l_k$(remainingRouteParts);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.navigation.Node.resolve.<anonymous>' call
      tmp = new ResolvedEntry(this, tmp0_safe_receiver);
    }
    return tmp;
  };
  protoOf(Node).get_nodes_ivvt6w_k$ = function () {
    return sequence(RouteTree$Node$_get_nodes_$slambda_9kqj3_0(this, null));
  };
  function RootNode() {
    Node.call(this, null, '', null);
  }
  protoOf(RootNode).consume_eqss8l_k$ = function (remainingRouteParts) {
    // Inline function 'kotlin.check' call
    if (!(first(remainingRouteParts) === '')) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    removeFirst(remainingRouteParts);
    return '';
  };
  function ChildNode(parent, sourceRoutePart, data) {
    Node.call(this, parent, sourceRoutePart, data);
  }
  function StaticNode(parent, sourceRoutePart, data) {
    ChildNode.call(this, parent, sourceRoutePart, data);
  }
  protoOf(StaticNode).consume_eqss8l_k$ = function (remainingRouteParts) {
    if (first(remainingRouteParts) === this.sourceRoutePart_1) {
      return removeFirst(remainingRouteParts);
    }
    return null;
  };
  function DynamicNode(parent, sourceRoutePart, data) {
    Companion_getInstance();
    ChildNode.call(this, parent, sourceRoutePart, data);
    var name = removeSurrounding(sourceRoutePart, '{', '}');
    var tmp = this;
    var tmp_0;
    if (startsWith_0(name, '...')) {
      name = removePrefix(name, '...');
      var tmp_1;
      if (endsWith_0(name, '?')) {
        name = removeSuffix(name, '?');
        tmp_1 = Match_REST_OPTIONAL_getInstance();
      } else {
        tmp_1 = Match_REST_getInstance();
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = Match_SINGLE_getInstance();
    }
    tmp.match_1 = tmp_0;
    this._name_1 = name;
    this.name_2 = this._name_1;
    this.isRouteTerminator_2 = !this.match_1.equals(Match_SINGLE_getInstance());
  }
  protoOf(DynamicNode).get_name_woqyms_k$ = function () {
    return this.name_2;
  };
  protoOf(DynamicNode).get_isRouteTerminator_8jl3dp_k$ = function () {
    return this.isRouteTerminator_2;
  };
  protoOf(DynamicNode).consume_eqss8l_k$ = function (remainingRouteParts) {
    switch (this.match_1.get_ordinal_ip24qg_k$()) {
      case 0:
        return removeFirst(remainingRouteParts);
      case 1:
      case 2:
        if (this.match_1.equals(Match_REST_OPTIONAL_getInstance()) || !(first(remainingRouteParts) === '')) {
          // Inline function 'kotlin.also' call
          var this_0 = joinToString(remainingRouteParts, '/');
          // Inline function 'com.varabyte.kobweb.navigation.DynamicNode.consume.<anonymous>' call
          remainingRouteParts.clear_j9egeb_k$();
          return this_0;
        }

        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return null;
  };
  function ResolvedEntry(node, capturedRoutePart) {
    this.node_1 = node;
    this.capturedRoutePart_1 = capturedRoutePart;
  }
  protoOf(ResolvedEntry).get_node_wor8sr_k$ = function () {
    return this.node_1;
  };
  protoOf(ResolvedEntry).get_capturedRoutePart_1j67zp_k$ = function () {
    return this.capturedRoutePart_1;
  };
  function _get_root__dd8asp($this) {
    return $this.root_1;
  }
  function _get_redirects__2c3o62($this) {
    return $this.redirects_1;
  }
  function resolveWithoutRedirects($this, route) {
    var routeParts = toMutableList(split(route, charArrayOf([_Char___init__impl__6a9atx(47)])));
    var currNode = $this.root_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(routeParts.get_c1px32_k$(0) === $this.root_1.sourceRoutePart_1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var resolved = mutableListOf([ensureNotNull($this.root_1.resolve_xt8n4r_k$(routeParts))]);
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!routeParts.isEmpty_y1axqb_k$()) {
        break $l$loop;
      }
      var tmp = asSequence(currNode.children_1);
      var tmp0_elvis_lhs = firstOrNull(mapNotNull(tmp, RouteTree$resolveWithoutRedirects$lambda(routeParts)));
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return null;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var resolvedEntry = tmp_0;
      currNode = resolvedEntry.node_1;
      resolved.add_utx5q5_k$(resolvedEntry);
    }
    // Inline function 'kotlin.takeIf' call
    var tmp_1;
    // Inline function 'com.varabyte.kobweb.navigation.RouteTree.resolveWithoutRedirects.<anonymous>' call
    if (resolved.isEmpty_y1axqb_k$() || !(last(resolved).node_1.data_1 == null)) {
      tmp_1 = resolved;
    } else {
      tmp_1 = null;
    }
    return tmp_1;
  }
  function resolveAllowingRedirects($this, route) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = route;
    var _iterator__ex2g4s = $this.redirects_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.navigation.RouteTree.resolveAllowingRedirects.<anonymous>' call
      var route_0 = accumulator;
      var tmp0_elvis_lhs = element.map_epzkwu_k$(route_0);
      accumulator = tmp0_elvis_lhs == null ? route_0 : tmp0_elvis_lhs;
    }
    var redirectedRoute = accumulator;
    return resolveWithoutRedirects($this, redirectedRoute);
  }
  function checkRoute($this, route) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!$this.root_1.children_1.isEmpty_y1axqb_k$()) {
      // Inline function 'com.varabyte.kobweb.navigation.RouteTree.checkRoute.<anonymous>' call
      var message = "No routes were ever registered. This is unexpected and probably means no `@Page` was defined (or pages were defined in the wrong place where Kobweb couldn't discover them).";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!startsWith(route, _Char___init__impl__6a9atx(47))) {
      // Inline function 'com.varabyte.kobweb.navigation.RouteTree.checkRoute.<anonymous>' call
      var message_0 = 'When checking a route, it must begin with a slash. Got: "' + route + '"';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp0_elvis_lhs = resolveAllowingRedirects($this, route);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var resolvedNodes = tmp;
    return toRouteString(resolvedNodes);
  }
  function RouteTree$resolveWithoutRedirects$lambda($routeParts) {
    return function (child) {
      return child.resolve_xt8n4r_k$($routeParts);
    };
  }
  function RouteTree() {
    this.root_1 = new RootNode();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.redirects_1 = ArrayList_init_$Create$();
  }
  protoOf(RouteTree).resolve_7ctaaf_k$ = function (route, allowRedirects) {
    return allowRedirects ? resolveAllowingRedirects(this, route) : resolveWithoutRedirects(this, route);
  };
  protoOf(RouteTree).resolve$default_qmjuym_k$ = function (route, allowRedirects, $super) {
    allowRedirects = allowRedirects === VOID ? true : allowRedirects;
    return $super === VOID ? this.resolve_7ctaaf_k$(route, allowRedirects) : $super.resolve_7ctaaf_k$.call(this, route, allowRedirects);
  };
  protoOf(RouteTree).isRegistered_1ncfv6_k$ = function (route) {
    return !(checkRoute(this, route) == null);
  };
  protoOf(RouteTree).register_q504rs_k$ = function (route, data) {
    if (!(resolveWithoutRedirects(this, route) == null))
      return false;
    var routeParts = toMutableList(split(route, charArrayOf([_Char___init__impl__6a9atx(47)])));
    var currNode = this.root_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(routeParts.get_c1px32_k$(0) === this.root_1.sourceRoutePart_1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    ensureNotNull(this.root_1.resolve_xt8n4r_k$(routeParts));
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!routeParts.isEmpty_y1axqb_k$()) {
        break $l$loop;
      }
      var tmp2 = currNode.children_1;
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp2.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          // Inline function 'com.varabyte.kobweb.navigation.RouteTree.register.<anonymous>' call
          if (element.sourceRoutePart_1 === first(routeParts)) {
            tmp$ret$3 = element;
            break $l$block;
          }
        }
        tmp$ret$3 = null;
      }
      var tmp0_safe_receiver = tmp$ret$3;
      var resolvedEntry = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.resolve_xt8n4r_k$(routeParts);
      if (!(resolvedEntry == null)) {
        currNode = resolvedEntry.node_1;
      } else {
        var tmp = currNode;
        var tmp_0 = removeFirst(routeParts);
        // Inline function 'kotlin.takeIf' call
        var tmp_1;
        // Inline function 'com.varabyte.kobweb.navigation.RouteTree.register.<anonymous>' call
        if (routeParts.isEmpty_y1axqb_k$()) {
          tmp_1 = data;
        } else {
          tmp_1 = null;
        }
        var tmp$ret$5 = tmp_1;
        currNode = tmp.createChild_922k2c_k$(tmp_0, tmp$ret$5);
      }
    }
    return true;
  };
  protoOf(RouteTree).registerRedirect_o9yje9_k$ = function (redirectRoute, actualRoute) {
    this.redirects_1.add_utx5q5_k$(PatternMapper_init_$Create$('^' + redirectRoute + '$', actualRoute));
  };
  protoOf(RouteTree).get_nodes_ivvt6w_k$ = function () {
    return this.root_1.get_nodes_ivvt6w_k$();
  };
  function toRouteString(_this__u8e3s4) {
    return joinToString(_this__u8e3s4, '/', VOID, VOID, VOID, VOID, toRouteString$lambda);
  }
  function toRouteString$lambda(it) {
    return it.capturedRoutePart_1;
  }
  function PatternMapper_init_$Init$(pattern, target, $this) {
    PatternMapper.call($this, Regex_init_$Create$(pattern), target);
    return $this;
  }
  function PatternMapper_init_$Create$(pattern, target) {
    return PatternMapper_init_$Init$(pattern, target, objectCreate(protoOf(PatternMapper)));
  }
  function PatternMapper(pattern, target) {
    this.pattern_1 = pattern;
    this.target_1 = target;
  }
  protoOf(PatternMapper).get_pattern_btfv4p_k$ = function () {
    return this.pattern_1;
  };
  protoOf(PatternMapper).get_target_juba8q_k$ = function () {
    return this.target_1;
  };
  protoOf(PatternMapper).map_epzkwu_k$ = function (text) {
    var tmp0_safe_receiver = this.pattern_1.matchEntire_6100vb_k$(text);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var final = this.target_1;
      var inductionVariable = get_lastIndex(tmp0_safe_receiver.get_groupValues_rkv314_k$());
      if (0 <= inductionVariable)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          final = replace(final, '$' + i, tmp0_safe_receiver.get_groupValues_rkv314_k$().get_c1px32_k$(i));
        }
         while (0 <= inductionVariable);
      return final;
    }
    return tmp;
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DynamicNode;
  _.$_$.b = RouteTree;
  _.$_$.c = toRouteString;
  //endregion
  return _;
}));
